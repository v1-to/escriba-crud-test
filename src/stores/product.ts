import { ToastColorThemeEnum } from '@/helpers/color'
import { useUIStore } from '@/stores/ui'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import $http from '../api'

export type Product = {
  id?: number
  descricao: string
  valoUnitario: number
}

const RESOURCE_PATH = '/produtos'

export const useProductStore = defineStore('product', () => {
  const uiStore = useUIStore()
  const items = ref<Product[]>([])

  async function list(filter: Partial<Product> = {}): Promise<Product[]> {
    try {
      const { data } = await $http.get<Product[]>(RESOURCE_PATH, {
        params: { ...filter }
      })
      items.value = data
      return data
    } catch (err) {
      uiStore.openToast('Erro ao fazer a listagem dos itens', ToastColorThemeEnum.DANGER)
      items.value = []
      return []
    }
  }

  async function read(id: number | string): Promise<Product | undefined> {
    try {
      const { data } = await $http.get<Product>([RESOURCE_PATH, Number(id)].join('/'))
      return data
    } catch (err) {
      uiStore.openToast('Erro ao trazer o item', ToastColorThemeEnum.DANGER)
      return undefined
    }
  }

  async function create(product: Product): Promise<void> {
    try {
      await $http.post<void>(RESOURCE_PATH, product)
      uiStore.openToast('Item inserido com sucesso', ToastColorThemeEnum.SUCCESS)
    } catch (err) {
      uiStore.openToast('Erro ao inserir o item', ToastColorThemeEnum.DANGER)
      throw err
    }
  }

  async function update({ id, ...fields }: Product): Promise<void> {
    try {
      await $http.put<void>([RESOURCE_PATH, id].join('/'), fields)
      uiStore.openToast('Item atualizado com sucesso', ToastColorThemeEnum.SUCCESS)
    } catch (err) {
      uiStore.openToast('Erro ao atualizar o item', ToastColorThemeEnum.DANGER)
      throw err
    }
  }

  async function remove({ id }: Product): Promise<void> {
    try {
      await $http.delete<void>([RESOURCE_PATH, id].join('/'))
      uiStore.openToast('Item removido com sucesso', ToastColorThemeEnum.SUCCESS)
    } catch (err) {
      uiStore.openToast('Erro ao excluir o item', ToastColorThemeEnum.DANGER)
      throw err
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
