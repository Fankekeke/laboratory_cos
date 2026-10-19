### 基于SpringBoot + Vue的实验室耗材管理系统

实验室物资管控、耗材申领审批、实验资产管理、数字化实验室、实验室耗材

##### 基础档案与分类体系
###### 学生管理/耗材类别： 统一维护学生实名档案与耗材分类标准，建立实验室规范化管理的数字化底座。

###### 套餐管理： 组合实验常用耗材形成标准套餐，支持学生一键批量申领，提升实验准备工作的效率。

##### 需求申请与审批流转
###### 学生制定申请耗材： 学生根据实验项目在线提交耗材领用单，详细记录所需规格，开启资源流转首环。

###### 申请记录/审批： 管理员实时审核学生申领请求，严格把控耗材用途与用量，确保实验资源合理分配。

##### 采购计划与资源供应
###### 制定采购计划： 基于审批通过的申领需求与当前库房缺口，科学编制采购清单，优化实验室运行经费。

###### 采购员采购： 采购人员对接供应商执行采买任务，实时更新到货状态，保障科研与教学耗材供应不中断。

##### 仓储动态与流向追踪
###### 库房管理/入库记录： 规范耗材验收入库流程，详细登记存放位置与批次，确保每一件入库物资账实相符。

###### 出库记录/明细： 根据审批结果办理实物出库，自动关联申领人与实验项目，实现耗材去向的全程追踪。

###### 出入库物品明细： 汇总记录每一笔耗材的领用动态，为实验室资产盘点与成本核算提供精准的数据凭证。

##### 数据分析与决策支持
###### 报表统计： 自动聚合耗材损耗率、使用趋势及经费分布，通过可视化数据报表辅助实验室科学运营。

#### 安装环境

JAVA 环境 

Node.js环境 [https://nodejs.org/en/] 选择14.17

Yarn 打开cmd， 输入npm install -g yarn !!!必须安装完毕nodejs

Mysql 数据库 [https://blog.csdn.net/qq_40303031/article/details/88935262] 一定要把账户和密码记住

redis

Idea 编译器 [https://blog.csdn.net/weixin_44505194/article/details/104452880]

WebStorm OR VScode 编译器 [https://www.jianshu.com/p/d63b5bae9dff]

#### 采用技术及功能

后端：SpringBoot、MybatisPlus、MySQL、Redis、
前端：Vue、Apex、Antd、Axios
报表：Spread.js

平台前端：vue(框架) + vuex(全局缓存) + rue-router(路由) + axios(请求插件) + apex(图表)  + antd-ui(ui组件)

平台后台：springboot(框架) + redis(缓存中间件) + shiro(权限中间件) + mybatisplus(orm) + restful风格接口 + mysql(数据库)

开发环境：windows10 or windows7 ， vscode or webstorm ， idea + lambok

学生管理，套餐管理，申请记录，库房管理，入库记录，出库记录，采购计划，报表统计，耗材类别，出入库物品明细

学生制定申请耗材->管理员审批制定采购计划->采购员采购->入库->出库


#### 前台启动方式
安装所需文件 yarn install 
运行 yarn run dev

#### 后端启动方式

1.首先启动redis，进入redis目录终端。输入redis-server回车
2.导入sql文件，修改数据库与redis连接配置
3.idea中启动后端项目

#### 默认后台账户密码
[管理员]
admin
1234qwer

[采购员]
caigou
1234qwer

[学生]
lisi
1234qwer
#### 项目截图

暂无

![](https://fank-bucket-oss.oss-cn-beijing.aliyuncs.com/work/936e9baf53eb9a217af4f89c616dc19.png) 

#### 演示视频

[项目视频：基于SpringBoot的实验室耗材管理系统](https://www.bilibili.com/video/BV1y94y1f783/)

#### 获取方式

Email: fan1ke2ke@gmail.com

WeChat: `Storm_Berserker`

`附带部署与讲解服务，因为要恰饭资源非免费，伸手党勿扰，谢谢理解😭`

> 1.项目纯原创，不做二手贩子 2.一次购买终身有效 3.项目讲解持续到答辩结束 4.非常负责的答辩指导 5.**黑奴价格**

> 项目部署调试不好包退！功能逻辑没讲明白包退！

<div align=center><img align="center" src="./assets/product_word.png" alt="fankekeke" /></div>

#### 其它资源
[2026年-答辩顺利通过-客户评价🀄](https://berserker287.github.io/2026/06/29/2026%E5%B9%B4%E7%AD%94%E8%BE%A9%E9%A1%BA%E5%88%A9%E9%80%9A%E8%BF%87/)

[2025年-答辩顺利通过-客户评价🍜](https://berserker287.github.io/2025/06/18/2025%E5%B9%B4%E7%AD%94%E8%BE%A9%E9%A1%BA%E5%88%A9%E9%80%9A%E8%BF%87/)

[2024年-答辩顺利通过-客户评价👻](https://berserker287.github.io/2024/06/06/2024%E5%B9%B4%E7%AD%94%E8%BE%A9%E9%A1%BA%E5%88%A9%E9%80%9A%E8%BF%87/)

[2023年-答辩顺利通过-客户评价🐢](https://berserker287.github.io/2023/06/14/2023%E5%B9%B4%E7%AD%94%E8%BE%A9%E9%A1%BA%E5%88%A9%E9%80%9A%E8%BF%87/)

[2022年-答辩通过率100%-客户评价🐣](https://berserker287.github.io/2022/05/25/%E9%A1%B9%E7%9B%AE%E4%BA%A4%E6%98%93%E8%AE%B0%E5%BD%95/)

[毕业答辩导师提问的高频问题](https://berserker287.github.io/2023/06/13/%E6%AF%95%E4%B8%9A%E7%AD%94%E8%BE%A9%E5%AF%BC%E5%B8%88%E6%8F%90%E9%97%AE%E7%9A%84%E9%AB%98%E9%A2%91%E9%97%AE%E9%A2%98/)

[50个高频答辩问题-技术篇](https://berserker287.github.io/2023/06/13/50%E4%B8%AA%E9%AB%98%E9%A2%91%E7%AD%94%E8%BE%A9%E9%97%AE%E9%A2%98-%E6%8A%80%E6%9C%AF%E7%AF%87/)

[计算机毕设答辩时都会问到哪些问题？](https://www.zhihu.com/question/31020988)

[计算机专业毕业答辩小tips](https://zhuanlan.zhihu.com/p/145911029)

#### 接JAVAWEB毕设，纯原创，价格公道，诚信第一

`网站建设、小程序、H5、APP、各种系统 选题+开题报告+任务书+程序定制+安装调试+项目讲解+论文+答辩PPT`

More info: [悲伤的橘子树](https://berserker287.github.io/)

<div align="center"><img align="center" src="./assets/chat_qr_code.png" alt="fankekeke" width=250 /></div>

<p><img align="center" src="./assets/wechat_group.png" alt="fankekeke" /></p>

**感谢查看**


