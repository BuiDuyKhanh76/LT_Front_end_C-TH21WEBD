function Home() {
  return (
    <>
      <div className="row see_all">
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
        <div className="col-3">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3 text-bg-primary border-primary">
              <h4 class="my-0 fw-normal">Truyện Tranh</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <img src="img/truyentranhdoraemon.jpg"></img>
                <li>Doraemon</li>
                <li>120.000</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Chọn mua</button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3 text-bg-primary border-primary">
              <h4 class="my-0 fw-normal">Truyện Tranh</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <img src="img/naruto.jpg"></img>
                <li>Naruto</li>
                <li>150.000</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Chọn mua</button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3 text-bg-primary border-primary">
              <h4 class="my-0 fw-normal">Tiểu thuyết</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <img src="img/ttlichsu.jpg"></img>
                <li>Nam Đế Vạn Xuân</li>
                <li>125.000</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Chọn mua</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
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
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3 text-bg-primary border-primary">
              <h4 class="my-0 fw-normal">Truyện Tranh</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <img src="img/sach2.jpg"></img>
                <li>Doraemon</li>
                <li>250.000</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Chọn mua</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3 text-bg-primary border-primary">
              <h4 class="my-0 fw-normal">Tiểu Thuyết</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <img src="./img/sach3.jpg"></img>
                <li>Trinh Thám</li>
                <li>150.000</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-primary">Chọn mua</button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default Home;