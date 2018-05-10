import React from 'react'
import {Flex} from 'antd-mobile'
import styles from './Head.less'
import signInImg from '../../../assets/img/sign_in.jpg'
import customerServiceImg from '../../../assets/img/customer_service.png'
import defaultPersonImg from '../../../assets/img/default_person.jpg'

export default class Head extends React.Component {

    render() {
        return (
            <Flex className={styles.head} direction={"column"} justify={"center"} align={"center"}>
                <img className={styles.signIn} src={signInImg}/>
                <img className={styles.customer_service} src={customerServiceImg}></img>
                <img className={styles.person_head} src={defaultPersonImg}/>
                <div className={styles.split}></div>
                <div className={styles.person}>
                    <div className={styles.name}>用户名</div>
                    <div className={styles.info}>上海&nbsp;男&nbsp; lv1</div>
                </div>
            </Flex>
        )
    }

}