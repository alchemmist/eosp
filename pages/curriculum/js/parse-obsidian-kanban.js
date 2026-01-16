async function loadCurriculum() {
  const md = await fetch("/eosp/curriculum/curriculum.md").then((r) => r.text());
  const lines = md.split("\n");

  const boards = [];
  let currentBoard = null;

  for (const line of lines) {
    const lectureMatch = line.match(/^##\s+(.*)/);
    if (lectureMatch) {
      if (currentBoard) boards.push(currentBoard);
      currentBoard = {
        id: lectureMatch[1].toLowerCase().replace(/\s+/g, "-"),
        title: lectureMatch[1],
        item: [],
      };
      continue;
    }

    const taskMatch = line.match(/^- \[( |x)\]\s+(.*)/);
    if (taskMatch && currentBoard) {
      const done = taskMatch[1] === "x";
      let content = taskMatch[2];

      content = content.replace(/`([^`]+)`/g, "<code>$1</code>");

      let type = "default";
      content = content.replace(/^#([\w-]+)/, (_, tag) => {
        type = tag;
        return `<span class="tag tag-${tag}">#${tag}</span>`;
      });

      currentBoard.item.push({
        title: content,
        class: done ? "done" : "",
        drag: true,
      });
    }
  }

  if (currentBoard) boards.push(currentBoard);

  const kanban = new jKanban({
    element: "#kanban",
    boards: boards,
    dragItems: true,
    dragBoards: false,
    gutter: "16px",
    widthBoard: "300px",
    itemAddOptions: {
      footer: true,
    },
    buttonClick: function (el, boardId) {
      // el — кнопка, boardId — id колонки
      kanban.addElement(boardId, {
        title: '<span class="tag">#note</span> New item',
        drag: true,
      });
    },
  });

  document.querySelectorAll(".kanban-board").forEach((board) => {
    const dragContainer = board.querySelector(".kanban-drag");
    if (dragContainer && !board.querySelector(".bottom-padding")) {
      const pad = document.createElement("div");
      pad.className = "bottom-padding";
      dragContainer.after(pad);
    }
  });
}

loadCurriculum();
