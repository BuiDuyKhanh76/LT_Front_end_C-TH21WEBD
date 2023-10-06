import './App.css';
import Menu from './pages/header/menu';
import Banner from './pages/banner/banner';
import Home from './pages/home/home';
import Footer from './pages/footer/footer';
import GioHang from './pages/giohang/giohang';
import './bootstrap-5.2.3/css/bootstrap.min.css';
import './css/style.css';
import './css/pricing.css';
import './css/banner.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Sử dụng Routes thay thế cho Switch

const LoaiSanPham = [
    {
        'name': 'Giáo Khoa',
        'ds_sp': [
            {
                'ten': 'sách vật lí',
                'hinh': 'img/sach1.jpg',
                'loai': "VIP",
                'giaban': "20000",
            },
            {
                'sach': 'sach2.jpg',
                'loai': "VIP",
                'giaban': "20000",
            },
        ]
    }
]

function App() {
    const ListLoaiSanPham = LoaiSanPham.map(function (item) {
        return (
            <Home data={item} />
        )
    });

    return (
        <>
            <Router>
                <Menu />
                <Routes> {/* Thay thế Routes cho Switch */}
                    <Route path="/giohang" element={<GioHang />} />
                    {/* Các đường dẫn và định tuyến khác */}
                    <Route path="/" element={ // Sử dụng element để xác định component
                        <>
                            {ListLoaiSanPham}
                            <Footer />
                        </>
                    } />
                </Routes>
            </Router>
        </>
    )
}

export default App;











// import './App.css';
// import Menu from './pages/header/menu';
// import Banner from './pages/banner/banner';
// import Home from './pages/home/home';
// import Footer from './pages/footer/footer';
// import GioHang from './pages/giohang/giohang';
// import './bootstrap-5.2.3/css/bootstrap.min.css';
// import './css/style.css';
// import './css/pricing.css';
// import './css/banner.css';
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import Menu from './Menu';
// // import GioHang from './GioHang';


// const LoaiSanPham=[
//   {
// 		'name':'Giáo Khoa',
// 		'ds_sp':[
// 		{
      
//       'ten':'sách vật lí',
//       'hinh':'img/sach1.jpg',
// 			'loai':"VIP",
// 			'giaban':"20000",	
// 		},

// 		{
//       'sach':'sach2.jpg',
// 			'loai':"VIP",
// 			'giaban':"20000",	
// 		},	
// 			]
//   }
// ]
// function App() {
//   const ListLoaiSanPham = LoaiSanPham.map(function(item){
//     return(
//       <Home data={item}/>
      
//     )
//   });
 
//   return (
//     <>
//         <Router>
//             <Menu />
//                 <Route path="/giohang" component={GioHang} />
//                 {/* Các đường dẫn và định tuyến khác */}
//             {ListLoaiSanPham}
//           <Footer/>
//         </Router>
//     </>
//   )
// }
// export default App;
