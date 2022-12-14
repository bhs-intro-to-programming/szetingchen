const getX = (o) => o.x
const point = (n1, n2) => ({ "x": n1, "y": n2 })
const emptyObject = () => ({})
const distance = (o1, o2) => Math.sqrt((o1.y - o2.y) ** 2 + (o1.x - o2.x) ** 2)
const midpoint = (o1, o2) => ({ "x": (o1.x + o2.x) / 2, "y": (o1.y + o2.y) / 2 })
const sumSalaries = (a) => a.reduce((acc, x) => acc + x.salary, 0)
const newHighScore = (hs, ps) => ps.reduce((acc, p) => Math.max(p.score, acc), hs)
const summarizeBooks = (bk) => ({"titles" : bk.map(x => x.title), "pages" : bk.reduce((acc, x) => acc + x.pages, 0)})