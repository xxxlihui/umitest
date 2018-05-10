import React from 'react'
import Head from './components/Head'
import MyWallet from './components/MyWallet'
import SplitRow from '../../components/SplitRow'
import Other from './components/IndexOtherButtons'
import {ListView, PullToRefresh} from 'antd-mobile'

export default class index extends React.Component {


    render() {
        const data = [
            {id:1,icon: "/money_2.png", title: "介绍场地赚收益", description: "如果您有物业资源推荐给我们，成功安装充电桩后可获收益分成。"},
            {id:2,icon: "/money_2.png", title: "介绍场地赚收益", description: "如果您有物业资源推荐给我们，成功安装充电桩后可获收益分成。"},
            {id:3,icon: "/money_2.png", title: "介绍场地赚收益", description: "如果您有物业资源推荐给我们，成功安装充电桩后可获收益分成。"},
        ]
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.id !== row2.id,
        });
        const height=document.documentElement.clientHeight-window.getPX(1)
        dataSource.cloneWithRows(data)
        const head = (<div>
            <Head/>
            <SplitRow/>
            <MyWallet/>
            <SplitRow/>
            <Other/>
        </div>);
        return (
            <ListView
                key={"1"}
                style={{height:height}}
                dataSource={dataSource}
                renderHeader={(args)=>{
                    console.log(args)
                    return head;
                }}
                contentContainerStyle={{}}
                renderFooter={() => {
                    return (<div>loading...</div>)
                }}
                renderBodyComponent={()=><div></div>}
                initialListSize={5}
                pageSize={5}
                renderRow={(rowData, sectionID, rowID, highlightRow) => {
                    return <div key={rowData.id}>rowData.title</div>
                }}
                pullToRefresh={
                    <PullToRefresh

                    />}
            />
        )
    }
}