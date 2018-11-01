import Request from '@/utils/Request'

const Brand = {
  // 获取品牌列表
  getBrandList: data =>
    Request(
      'GET',
      '/index.php?r=api/brand/gethotbrandlists&haveGroup=1&noIndex=1&isW=2',
      data
    ),
  // 获取车系列表
  getSeriesList: data =>
    Request(
      'GET',
      '/index.php?r=m/ajax/filter/index&option=series&id=5&brandtype=1&isJson=1&noIndex=1',
      data
    )
}
export default Brand
