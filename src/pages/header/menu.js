import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <>
            <div className="topnav">
            <img src="img/logosach.jpg"></img>
            </div>
            <div className="topnav">
                <Link to="/">Trang Chủ</Link>
                <Link to="/sanpham">Sản Phẩm</Link>
                <Link to="/loaisanpham">Loại Sản Phẩm</Link>
                <Link to="/giohang">Giỏ Hàng</Link>
                {/* Các liên kết khác */}
                <input type="text" placeholder="Tìm Kiếm.." />
            </div>
        </>
    );
}

export default Menu;
