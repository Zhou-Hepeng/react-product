import React, { Component } from 'react'
import css from './style.less'
import { Link } from 'react-router-dom'
import { Request } from '@/utils'
import { Brand } from '@/Api'
import { BrandModel, IndexNav } from '@/components/Brand'
// 主布局
class BrandView extends Component {
  constructor() {
    super()
    this.state = {
      brandList: [
        { name: '北标兵', src: 'nihao' },
        { name: '北炮兵', src: 'nihao' },
        { name: '奔北坡', src: 'nihao' }
      ],
      letter: ['A', 'B', 'C', 'D'],
      recommend: []
    }
  }
  async componentDidMount() {
    // const data = await Brand.getBrandList({})
    // if (data && data.info === 'ok') {
    //   const { brandList, letter, recommend } = data
    //   this.setState({
    //     brandList,
    //     letter,
    //     recommend
    //   })
    // }
    // console.log(data, '请求的')
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidUpdate() {}

  // 跳转锚点
  anchor(item) {
    console.log(item)
  }
  render() {
    const { letter, brandList } = this.state
    return (
      <div className={css.App}>
        <Link to="/series" className={css.goto}>
          跳转
        </Link>
        {/* IndexNav导航 */}
        {letter.length && <IndexNav letter={letter} onClick={this.anchor} />}
        {/* 品牌列表 */}
        {brandList.length &&
          brandList.map(item => <BrandModel key={item.name} item={item} />)}
      </div>
    )
  }
}
export default BrandView
