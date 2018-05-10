import React from 'react'
import {Flex} from 'antd-mobile'
import Bar from './indexBar'
import styles from './indexlayout.less'


export default ({children,location}) => {
    return (
        <Flex className={styles.container} direction={"column"} style={{width: "100%", height: "100%"}}>
            <Flex.Item direction={"column"} style={{flex:1,width:"100%"}} >
                {/*页面放置*/}
                {children}
            </Flex.Item>
            <div style={{width:"100%",height:"1rem"}}>
                <Bar {...{location}}/>
            </div>
        </Flex>
    )
}