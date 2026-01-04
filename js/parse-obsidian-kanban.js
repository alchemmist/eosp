async function loadCurriculum() {
  const md = await fetch('/eosp-course/curriculum.md').then(r => r.text())
  const lines = md.split('\n')

  const boards = []
  let currentBoard = null

  for (const line of lines) {
    const lectureMatch = line.match(/^##\s+(.*)/)
    if (lectureMatch) {
      if (currentBoard) boards.push(currentBoard)
      currentBoard = {
        id: lectureMatch[1].toLowerCase().replace(/\s+/g, '-'),
        title: lectureMatch[1],
        item: []
      }
      continue
    }

    const taskMatch = line.match(/^- \[( |x)\]\s+(.*)/)
    if (taskMatch && currentBoard) {
      const done = taskMatch[1] === 'x'
      const content = taskMatch[2]

      const tagMatch = content.match(/#([\w-]+)/)
      const type = tagMatch ? tagMatch[1] : 'default'
      const title = content.replace(/#([\w-]+)/, '').trim()

      currentBoard.item.push({
        title: title,
        class: done ? 'done' : '',
        drag: false,
        type: type
      })
    }
  }

  if (currentBoard) boards.push(currentBoard)

  new jKanban({
    element: '#kanban',
    boards: boards,
    dragItems: false,
    gutter: '16px',
    widthBoard: '300px'
  })

  document.querySelectorAll('.kanban-item').forEach(el => {
    const text = el.textContent
    const match = text.match(/^\[(\w+)\]/)
    if (match) el.dataset.type = match[1]
  })
}

loadCurriculum()
