import { readable, writable } from "svelte/store";

export const showMenu = writable(false)
export const toggleMenu = () => {
  showMenu.update((old) => !old)
}