import React from 'react'
import {Flex, Icon, Grid, WingBlank} from 'antd-mobile'
import styles from './MyWallet.less'
import moneyImg from '../../../assets/img/money.png'
import integralImg from '../../../assets/img/integral.png'
import frozenlImg from '../../../assets/img/frozen.png'
import electromobileImg from '../../../assets/img/electromobile.png'
import profitImg from '../../../assets/img/profit.png'
import couponImg from '../../../assets/img/coupon.png'

export default class MyWallet extends React.Component {

    render() {
        const {money = 0, frozenl=0, integral = 0, time = 0, profit = 0, coupon = 0} = this.props
        const data = [
            {icon: moneyImg, textNode: <span className={styles.money}>可提现余额</span>, contentNode: <span>{money}</span>},
            {icon: frozenlImg, textNode: <span  className={styles.money}>被冻结金额</span>, contentNode: <span>{frozenl}</span>},
            {icon: profitImg, textNode: <span  className={styles.money}>收益金额</span>, contentNode: <span>{profit}</span>},
            {icon: couponImg, textNode: <span className={styles.other}>活动优惠卷</span>, contentNode: <span>{coupon}</span>},
            {icon: electromobileImg, textNode: <span className={styles.other}>充电时长</span>, contentNode: <span>{time}</span>},
            {icon: integralImg, textNode: <span className={styles.other}>充电积分</span>, contentNode: <span>{integral}</span>},
        ]
        return (
            <div>
                <Flex className={styles.head} align={"center"} direction={"row"}>
                    <Flex className={styles.innerBox} align={"start"} direction={"row"}>
                        <div className={styles.title}>我的钱包</div>
                        <Flex.Item/>
                        <Flex className={styles.extra} align={"start"} direction={"row"}>
                            <span>充值、提现、帐单&nbsp;等</span><Icon style={{marginTop: -3}} type={"right"} size={"md"}/>
                        </Flex>
                    </Flex>
                </Flex>
                <Grid
                    square={false}
                    data={data}
                    columnNum={3}
                    hasLine={true}
                    itemStyle={{
                        width: "2.24rem",
                        height: "1.12rem"
                    }}
                    renderItem={(el, index) => {
                        return (
                            <Item {...el}/>
                        )
                    }}
                />
            </div>
        )
    }
}

class Item extends React.Component {
    render() {
        const {icon, textNode, contentNode} = this.props
        return (
            <Flex className={styles.item} align={"start"} justify={"center"}>
                <div>
                    <img className={styles.icon} src={icon}/>
                </div>
                <div>
                    <div className={styles.title}>{textNode}</div>
                    <div className={styles.content}>{contentNode}</div>
                </div>
            </Flex>
        )
    }
}