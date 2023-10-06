import { Component } from "react";

class SanPham extends Component{

    render(){
        return(
            <div>
                <h2>Loại sản phẩm</h2>
                <div className="col-3">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3 text-bg-primary border-primary">
              <h4 class="my-0 fw-normal">Giáo Khoa</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <img src="img/sach1.jpg"></img>
                <li>Vật Lý</li>
                <li>100.000</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Chọn mua</button>
            </div>
          </div>
        </div>
        
            </div>
        )
    }
}
export default SanPham;


