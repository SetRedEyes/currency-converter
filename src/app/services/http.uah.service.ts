import httpService from './http.service'

const uahEndpoint = 'uah.json'

const uahService = {
  fetchAll: async () => {
    const { data } = await httpService.get(uahEndpoint)
    return data
  }
}
export default uahService
