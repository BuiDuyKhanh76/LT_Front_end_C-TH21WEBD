function Footer(){
    return(
        <>
            <div class="container">
            <footer class="py-5">
                <div class="row">
                <div class="col-6 col-md-2 mb-3">
                    <h5>Giáo Khoa</h5>
                    <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Khoa Học</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Ngoại Ngữ</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Tin Học</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Toán Học</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Hóa Học</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md-2 mb-3">
                    <h5>Truyện Tranh</h5>
                    <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Doraemon</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Naruto</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Tom and Jerry</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Oggy</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Mickey</a></li>
                    </ul>
                </div>

                <div class="col-6 col-md-2 mb-3">
                    <h5>Tiểu Thuyết</h5>
                    <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Trinh Thám</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Kinh Dị</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Lịch Sử</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Giả tưởng</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Tình Cảm</a></li>
                    </ul>
                </div>

                <div class="col-md-5 offset-md-1 mb-3">
                    <form>
                    <h5>Theo dõi bản tin của chúng tôi</h5>
                    <p>Thông báo hàng tháng về những gì mới và thú vị từ chúng tôi.</p>
                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label for="newsletter1" class="visually-hidden">Email </label>
                        <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                        <button class="btn btn-primary" type="button">Subscribe</button>
                    </div>
                    </form>
                </div>
                </div>

                <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>&copy; 2023 Company, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                </ul>
                </div>
            </footer>
            </div>
        </>
    );
}
export default Footer;