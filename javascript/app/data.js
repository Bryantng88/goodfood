var dayInWeek = [{id: 1, name: 'Thu 2' }, {id: 2, name: 'Thu 3' }, {id: 3, name: 'Thu 4' }, {id: 4, name: 'Thu 5' }, {id: 5, name: 'Thu 6' }, {id: 6, name: 'T7' },{id: 7, name: 'CN' },{id: 8, name: 'T2' }, {id: 9, name: 'T3' }, {id: 10, name: 'T4' }, {id: 11, name: 'T5' }, {id: 12, name: 'T6' }]

var products = [
{id:'he1', name: 'thit heo', description: 'ngon' , price: 50000, counts: 60}, 
{id:'bo1', name: 'bo xao rau', description: 'do' , price: 50000, counts: 60 },
{id:'ga1', name: 'thit ga', description: 'ngon' , price: 50000, counts: 60}, 
{id:'cu1', name: 'thit cho', description: 'hay' , price: 50000, counts: 60}, 
{id:'me1', name: 'thit meo', description: 'duoc' , price: 50000, counts: 60 },
{id:'to1', name: 'thit tom', description: 'beo' , price: 50000, counts: 60}, 
{id:'he2', name: 'thit heo', description: 'rat ngon' , price: 50000, counts: 60 }, 
{id:'bo2', name: 'bo ham mam', description: 'tom' , price: 50000, counts: 60},
{id:'to2', name: 'tom lan bot', description: 'beo' , price: 50000, counts: 60}, 
{id:'ca2', name: 'heo chien gion', description: 'rat ngon' , price: 50000, counts: 60 }, 
{id:'ca1', name: 'chim cut', description: 'tom' , price: 50000, counts: 60},
{id:'ga2', name: 'khi xao lan', description: 'tom' , price: 50000, counts: 60}]

var mealOfDay = [{id: 'm1', name:'breakfast'}, {id: 'm2', name: 'lunch'}, {id: 'm3', name: 'dinner'}]

var navBar = [{name: 'home'}, {name: 'menu'}, {name: 'order'}, {name: 'blog'}]

var detail = [dayInWeek, products, mealOfDay, navBar]

var productOrder = []

var addOns = [{id:'a01', name: 'banh mi', description: 'ngon' , price: 20000}, {id:'a02', name: 'chuoi', description: 'ngon', price: 20000}, {id:'a03', name: 'che dau', description: 'ngon',price: 20000}
,{id:'a04', name: 'luu dan', description: 'ngon', price: 20000},{id:'a05', name: 'da ua', description: 'ngon' , price: 20000},{id:'a06', name: 'bap xao', description: 'ngon', price: 20000}]

var juices = [{id:'ju1', name: 'nuoc xoai', description: 'ngon', price: 15000}, {id:'ju2', name: 'nuoc chuoi', description: 'ngon', price: 15000}, {id:'ju3', name: 'hon hop', description: 'ngon', price: 15000}
,{id:'ju4', name: 'nuoc mia', description: 'ngon', price: 15000},{id:'ju5', name: 'nuoc ua', description: 'ngon', price: 15000},{id:'ju6', name: 'rau ma', description: 'ngon', price: 15000}]

var deliveryPlan = [{id: 'dl1', name: 'catch up'}, {id: 'dl2', name: 'always ready'}]

var specialRequests = [{id: 'rq1', name: 'request1'}]

const formatter = new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'VND'
  })

const date = new Date()

var suggestedProducts = [{id:'p13', name: 'banh trang nuong', description: 'ngon' , price: 50000}, {id:'p14', name: 'bo xot tieu', description: 'do' , price: 50000 },
{id:'p15', name: 'ca chien xu', description: 'ngon' , price: 50000}, ]

var suggestedAddOns = [{id:'a07', name: 'banh mi', description: 'ngon' , price: 20000}, {id:'ao8', name: 'chuoi', description: 'ngon', price: 20000}, {id:'a09', name: 'che dau', description: 'ngon',price: 20000}]