import React from 'react';
import { Link } from 'react-router-dom';

function GioHang({giohang}) {
    return (
        <>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vật Lý</td>
                            <td>100.000</td>
                            <td>5</td>
                            <td>500.000</td>
                        </tr>
                        <tr>
                            <td>Doraemon</td>
                            <td>120.000</td>
                            <td>10</td>
                            <td>1.200.000</td>
                        </tr>
                        <tr>
                            <td>Naruto</td>
                            <td>150.000</td>
                            <td>3</td>
                            <td>450.000</td>
                        </tr>
                        <tr>
                            <td>Nam Đế Vạn Xuân</td>
                            <td>125.000</td>
                            <td>2</td>
                            <td>250.000</td>
                        </tr>
                    </tbody>
                </table>
                <p>Tổng cộng: 2.400.000</p>
                <a href="/thanh-toan" className="checkout-button">Thanh toán</a>
            </div>
        </>
    );
}

export default GioHang;
