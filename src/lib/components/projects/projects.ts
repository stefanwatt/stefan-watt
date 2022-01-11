const defaultTitle = "My sample project";
const defaultImg = "https://via.placeholder.com/500";
const status = {
  done: { text: 'done', class: 'badge-success' },
  progress: { text: 'in progress', class: 'badge-warning' },
  cancelled: { text: 'cancelled', class: 'badge-error' },
}
export default [
  {
    id: 1,
    title: defaultTitle,
    img: defaultImg,
    status: status.done,
  },
  {
    id: 2,
    title: defaultTitle,
    img: defaultImg,
    status: status.progress,
  },
  {
    id: 3,
    title: defaultTitle,
    img: defaultImg,
    status: status.done,
  },
  {
    id: 4,
    title: defaultTitle,
    img: defaultImg,
    status: status.done,
  },
  {
    id: 5,
    title: defaultTitle,
    img: defaultImg,
    status: status.cancelled,
  },
];