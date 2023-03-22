import { ToastColorThemeEnum } from '@/helpers/color'
import { useUIStore } from '@/stores/ui'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import $http from '../api'

export type Order = {
  id?: number
  cliente: {
    id: number
    nome: string
  }
  dataEmissao: string
  valorTotal: number
  itens: Array<{
    id: number
    produto: {
      id: number
      descricao: string
    }
    valor: number
    quantidade: number
    subtotal: number
  }>
}

const RESOURCE_PATH = '/pedidos'

export const useOrderStore = defineStore('order', () => {
  const uiStore = useUIStore()
  const items = ref<Order[]>([])

  async function list(filter: Partial<Order> = {}): Promise<Order[]> {
    try {
      const { data } = await $http.get<Order[]>(RESOURCE_PATH, {
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

  async function read(id: number | string): Promise<Order | undefined> {
    try {
      const { data } = await $http.get<Order>([RESOURCE_PATH, Number(id)].join('/'))
      return data
    } catch (err) {
      uiStore.openToast('Erro ao trazer o item', ToastColorThemeEnum.DANGER)
      return undefined
    }
  }

  async function create(order: Order): Promise<void> {
    try {
      await $http.post<void>(RESOURCE_PATH, order)
      uiStore.openToast('Item inserido com sucesso', ToastColorThemeEnum.SUCCESS)
    } catch (err) {
      uiStore.openToast('Erro ao inserir o item', ToastColorThemeEnum.DANGER)
    }
  }

  async function update({ id, ...fields }: Order): Promise<void> {
    try {
      await $http.put<void>([RESOURCE_PATH, id].join('/'), fields)
      uiStore.openToast('Item atualizado com sucesso', ToastColorThemeEnum.SUCCESS)
    } catch (err) {
      uiStore.openToast('Erro ao atualizar o item', ToastColorThemeEnum.DANGER)
    }
  }

  async function remove({ id }: Order): Promise<void> {
    try {
      await $http.delete<void>([RESOURCE_PATH, id].join('/'))
      uiStore.openToast('Item removido com sucesso', ToastColorThemeEnum.SUCCESS)
    } catch (err) {
      uiStore.openToast('Erro ao excluir o item', ToastColorThemeEnum.DANGER)
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
