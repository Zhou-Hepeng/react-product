import Request from '@/utils/Request'

export const getBrandList = data =>
  Request(
    'GET',
    '/index.php?r=api/brand/gethotbrandlists&haveGroup=1&noIndex=1&isW=2',
    data
  )
export default {
  getBrandList
}
