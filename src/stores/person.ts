import { defineStore } from 'pinia'
import { ref } from 'vue'
import $http from '../api'

export type Person = {
  id: Number
  nome: String
  cpf: String
  dataNascimento: String
}

const RESOURCE_PATH = '/pessoas'

export const usePersonStore = defineStore('person', () => {
  const items = ref<Person[]>([])
  const item = ref<Person | undefined>()

  async function list(): Promise<Person[]> {
    try {
      const { data } = await $http.get<Person[]>(RESOURCE_PATH)
      items.value = data
      return data
    } catch (err) {
      items.value = []
      return []
    }
  }

  async function read(id: string): Promise<Person | undefined> {
    try {
      const { data } = await $http.get<Person>([RESOURCE_PATH, id].join('/'))
      item.value = data
      return data
    } catch (err) {
      item.value = undefined
      return undefined
    }
  }

  async function create(person: Person): Promise<void> {
    try {
      await $http.post<void>(RESOURCE_PATH, person)
    } catch (err) {
      console.log(err)
    }
  }

  async function update({ id, ...fields }: Person): Promise<void> {
    try {
      await $http.put<void>([RESOURCE_PATH, id].join('/'), fields)
    } catch (err) {
      console.log(err)
    }
  }

  async function remove({ id }: Person): Promise<void> {
    try {
      await $http.delete<void>([RESOURCE_PATH, id].join('/'))
    } catch (err) {
      console.log(err)
    }
  }

  return {
    items,
    list,
    read,
    create,
    update,
    remove
  }
})
