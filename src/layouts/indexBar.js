import {TabBar} from 'antd-mobile'
import React from 'react'
import router from 'umi/router'
import styles from './indexBar.less'


const {TabItem} = TabBar
export default ({location}) => {
    const path=location.pathname
    return (
        <TabBar

            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={false}
            noRenderContent={true}
        >
            <TabItem className={styles.item}
                icon={
                    <div  className={styles.icon} style={{
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                }
                selectedIcon={
                    <div className={styles.icon} style={{
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                }
                title="首页"
                key="首页"
                selected={path=="/"}
                onPress={() => {
                    if(path!="/"){
                        router.replace("/")
                    }
                }}
            >

            </TabItem>
            <TabItem className={styles.item}
                icon={
                    <div className={styles.icon} style={{
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                }
                selectedIcon={
                    <div className={styles.icon} style={{
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                }
                title="发现"
                key="发现"
                selected={path=="/find"}
                onPress={() => {
                    if(path!="/find"){
                        router.replace("/find")
                    }
                }}
            >

            </TabItem>
            <TabItem className={styles.item}
                icon={
                    <div className={styles.icon} style={{
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                }
                selectedIcon={
                    <div className={styles.icon} style={{
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                }
                title="扫码"
                key="扫码"
                selected={false}
                onPress={() => {

                }}
            >

            </TabItem>
            <TabItem className={styles.item}
                icon={
                    <div className={styles.icon} style={{
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                }
                selectedIcon={
                    <div className={styles.icon} style={{
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                }
                title="社区"
                key="社区"
                selected={path=="/community"}
                onPress={() => {
                    if(path!="/community"){
                        router.replace("/community")
                    }
                }}
            >

            </TabItem>
            <TabItem className={styles.item}
                icon={
                    <div  className={styles.icon} style={{
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                }
                selectedIcon={
                    <div className={styles.icon} style={{
                        background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                }
                title="个人"
                key="个人"
                selected={path=="/person"}
                onPress={() => {
                    if(path!="/person"){
                        router.replace("/person")
                    }
                }}
            >

            </TabItem>
        </TabBar>
    )
}