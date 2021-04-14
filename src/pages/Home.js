import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div className="App">
              <div id="fb-root"></div>
              {/* <div class="fb-customerchat"
              attribution = setup_tool
              page_id="1681597472146812">
              </div> */}

                      <nav class="navbar  navbar-fixed-top">
                          <div class="container">
                              <div class="navbar-header">
                                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="true" aria-controls="navbar">
                                    <span class="sr-only">Toggle navigation</span>
                                   <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                     <span class="icon-bar"></span>
                                     </button>
                                  <div class="logo"> 
                                          <div id="logo">
                                              <a class="navbar-brand" href="/" >GoStream - Let's Go, Let's Stream</a>
                                                <h1 class="hide">Phần mềm livestream chuyên nghiệp</h1>
                                          </div>
      
                                          <div class="hide" id="logo2">
                                              <a class="navbar-brand" href="/" >GoStream - Let's Go, Let's Stream</a>
                                          </div>
                                  </div>
                              </div>
                              <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">
                                  <ul class="nav navbar-nav navbar-right ">                
                                      <ul id="menu-main" class="nav navbar-nav menu-box">
                                          <li class="" itemprop="name">
                                                  <a target="_blank" href="https://www.youtube.com/watch?v=faNjs_9Qa_8&list=PLiZE85PQF-w3itFjce_bDaPvzp3rmpiLY" data-href="guide-page" class='item' title="Hướng dẫn" itemprop="url">
                                                    <span class='text-menu'>Hướng dẫn</span>
                                                    </a>
                                          </li>
                                          <li class="" itemprop="name"><a  href="/app-page" data-href="app-page" class='item' title="App" itemprop="url"><span class='text-menu'>App</span></a></li>
                                          <li class="" itemprop="name"><a  href="/pricing-page" data-href="pricing-page" class='item' title="Bảng giá" itemprop="url"><span class='text-menu'>Bảng giá</span></a></li>
                                          <li class="" itemprop="name"><a target="_blank" href="/blog" data-href="blog" class='item' title="Blog" itemprop="url"><span class='text-menu'>Blog</span></a></li>
                                          <li class="" itemprop="name"><a target="_blank" href="https://gostream.co/login" data-href="login" class='item' title="Đăng nhập" itemprop="url"><span class='text-menu'>Đăng nhập</span></a></li>
                                          <li class="" itemprop="name"><a  href="#signup-free" data-href="dang-ky-mien-phi" class='item' title="Đăng ký miễn phí" itemprop="url"><span class='text-menu'>Đăng ký miễn phí</span></a></li>
                                        </ul>             
                                          <li class="icon">
                                            <a href="" id="formSearch" onclick="return false;">
                                            <img src="/public/images/vi.png" alt=""/>
                                          </a>
                                          </li>
                                  </ul>
                                  <div id="goLanguage" class="go-language">
                                      <div class="po-se">
                                          <ul class="list-lg">
                                              <li><a href="/frontend/index/changeLang?l=en" title=""><img src="/publicen.png" alt=""/>English</a></li>
                                              <li><a href="/frontend/index/changeLang?l=vn" title=""><img src="/publicvi.png" alt=""/>Viet Nam</a></li>
                                              <li><a href="/frontend/index/changeLang?l=th" title=""><img src="/publicth.jpg" alt=""/>Thailand</a></li>
                                              <li><a href="/frontend/index/changeLang?l=id" title=""><img src="/publicid.jpg" alt=""/>Indonesia</a></li>
                                          </ul>
                                      </div>
                                  </div>
      
                              </div>
                          </div>
                      </nav>

      
                    <main class="gd-main">
                      
                  <section id="rev_slider_30_1_wrapper" class="section_tool section-banner rev_slider_wrapper fullscreen-container" style="background-image: url(/public/images/1516172490_bg_home.png);">
                      <div id="rev_slider_30_1">
                          <div class="tool-live">
                              <div class="container">
                                  <div class="row">
                                      <div class="box-des">
                                          <h2 class="big-title tt-while bounceInDown animated">LIVESTREAM  Nhanh hơn <br/>  Dễ dàng hơn</h2>
                                          <p class="big-text bounceInDown animated">Tạo tài khoản miễn phí ngay hôm nay</p>
                                          <div class="button-tool">
                                              <a href="#signup-free" class="btn-tool btn-hot hvr-float-shadow animated bounceInRight"><span>Đăng ký miễn phí</span></a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="down-up">
                              <a href="#case" class="down-up" data-uk-smooth-scroll>
                                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                              </a>
                          </div>
                                  <div class="list-add-stream">
                              <div class="container">
                                  <div class="row">
                                      <ul>
                                          <li class="hvr-bounce-in"><img src="/public/images/1516173339_dichvu1.png" alt=""/></li>
                                          <li class="hvr-bounce-in"><img src="/public/images/1516173375_dichvu3.png" alt=""/></li>
                                          <li class="hvr-bounce-in"><img src="/public/images/1516173404_dichvu4.png" alt=""/></li>
                                          <li class="hvr-bounce-in"><img src="/public/images/1516173434_dichvu5.png" alt=""/></li>
                                          <li class="hvr-bounce-in"><img src="/public/images/1516173298_dichvu2.png" alt=""/></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                              </div>
                  </section>
                  <section className="main-section section-full" id="feature">
                      <div class="box-full">
                          <div class="container">
                              <div className="row box-top">
                                  <div class="col-md-6 col-sm-6 col-xs-12">
                                      <h4 class="title-ss text-left-bf" id="case">Tính năng</h4>
                                      <div class="slider slider-nav slider-full">
                                                                  <div class="item-full">
                                              <div class="icon-list">
                                                  <img class= "icon-sub" src="/public/images/1516501350_01_home-11.png" alt=""/>
                                              </div>
                                              <div class="content-list 0">
                                                  <p class="title">Game đuổi hình bắt chữ</p>
                                                  <p class="sub descript">Kích thích sự tương tác tự nhiên của mọi người bằng các mini-game live stream hấp dẫn. Có thể dùng mini-game để tặng quà cho khách hàng của mình.</p>
                                              </div>
                                          </div> 
                                                                  <div class="item-full">
                                              <div class="icon-list">
                                                  <img class= "icon-sub" src="/public/images/1516501417_01_home-13.png" alt=""/>
                                              </div>
                                              <div class="content-list 0">
                                                  <p class="title">Live stream từ nhiều nguồn</p>
                                                  <p class="sub descript">Hỗ trợ mạnh mẽ livestream từ nhiều nguồn video khác nhau, từ tất cả các trang mạng xã hội mà bạn yêu thích.</p>
                                              </div>
                                          </div> 
                                                                  <div class="item-full">
                                              <div class="icon-list">
                                                  <img class= "icon-sub" src="/public/images/1516501262_01_home-01.png" alt=""/>
                                              </div>
                                              <div class="content-list 0">
                                                  <p class="title">Live stream từ video có sẵn</p>
                                                  <p class="sub descript">Live stream từ video được biên tập sẵn giúp bạn tiết kiệm được thời gian và có được video live stream ưng ý nhất.</p>
                                              </div>
                                          </div> 
                                                                  <div class="item-full">
                                              <div class="icon-list">
                                                  <img class= "icon-sub" src="/public/images/1516501383_01_home-12.png" alt=""/>
                                              </div>
                                              <div class="content-list 0">
                                                  <p class="title">Phát video trực tuyến</p>
                                                  <p class="sub descript">Bạn có thể live stream trực tiếp bằng webcam máy tính sử dụng các khung hình sinh động, có thể pin comment của khách hàng lên chính video live stream.</p>
                                              </div>
                                          </div> 
                                                                  <div class="item-full">
                                              <div class="icon-list">
                                                  <img class= "icon-sub" src="/public/images/1516501309_01_home-1.png" alt=""/>
                                              </div>
                                              <div class="content-list 0">
                                                  <p class="title">Phát lại livestream lên các sàn Thương mại điện tử Shopee, Tiki, Lazada </p>
                                                  <p class="sub descript">Hỗ trợ người dùng mở rộng nền tảng bán hàng và mang đến cơ hội tiếp cận một lượng khách hàng mới đầy tiềm năng. Giờ đây, không chỉ livestream trên youtube, facebook, bạn còn có thể livestream lên các sàn TMĐT  với những video sẵn có bằng GoStream.</p>
                                              </div>
                                          </div> 
                                                                                                            
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="slider slider-for screen-min">
                                          <div>
                                  <img src="/public/images/1517621281_1.png" alt=""/>
                              </div>
                                          <div>
                                  <img src="/public/images/1517621385_2.png" alt=""/>
                              </div>
                                          <div>
                                  <img src="/public/images/1520041532_3.jpg" alt=""/>
                              </div>
                                          <div>
                                  <img src="/public/images/1520213353_1.png" alt=""/>
                              </div>
                                          <div>
                                  <img src="/public/images/1613559210_banner-tmdt-website-gostream-02.jpg" alt=""/>
                              </div>
                                                        
                          </div>
                      </div>
                  </section>
                  <section class="section-min countUp" style="background: url(/public/images/1516536070_count-up.png);">
                      <div class="container">
                          <div class="row">
                              <div class="col-xs-3">
                                                                    
                                  <div class="sub-light number-count">
                                      <span class="counter">
                                          500                       
                                      </span>K+
                                      <p class="title-number">
                                      Registered users</p>
                                  </div>
                              </div>
                              <div class="col-xs-3">
                                  <div class="sub-light number-count"><span class="counter">
                                      6.000                       
                                      </span>+
                                      <p class="title-number">
                                      Daily active users</p>
                                  </div>
                              </div>
                              <div class="col-xs-3">
                                  <div class="sub-light number-count"><span class="counter">
                                      30                       
                                      </span>K+
                                      <p class="title-number">
                                      Daily stream videos</p>
                                  </div>
                              </div>
                              <div class="col-xs-3">
                                  <div class="sub-light number-count"><span class="counter">
                                      1.000                       
                                      </span>+
                                      <p class="title-number">
                                      Daily new users</p>
                                  </div>
                                              </div>
                          </div>
                      </div>
                  </section>
                  <section class="section_tool ss-custom main-section" style="background-image: url(/public/images/1516521007_bg-we.png);">
                      <div class="container">
                          <h4 class="title-ss tt-while">
                          LIVE STREAM TRÊN NHIỀU NỀN TẢNG CHỈ VỚI 3 CLICKS</h4>
                          <div class="row">
                              <a href="#signup-free" title="" class="btn-section btn-regis btn-while hvr-float-shadow">Bắt đầu ngay</a>
                          </div>
                      </div>
                  </section>
      
                      <section class="main-section  bd-bottom">
                          <div class="container">
                              <h4 class="title-ss title-bf text-centter">Ứng dụng            </h4>
                              <div class="row box-top">
                                  <div class="col-md-5 col-sm-5 col-xs-12 full-screen">
                                      <div class="slider slider-for1">
                                                                                          <div>
                                              <div class="item-cate">
                                                  <h4 class="title-cate">
                                                      <span class="number">01</span><span class="right-title">Hỏi Đáp</span>
                                                  </h4>
                                                  <p class="descript">“Tạo show hỏi đáp – mọi thắc mắc luôn được hồi đáp”. 
                  Hiểu một cách đơn giản, khách hàng là người đặt câu hỏi và bạn chính là người trả lời. Tuy nhiên, để tương tác một cách tốt nhất, mang lại sự vui vẻ và kịp thời người cho người xem. GoStream với tính năng ghim câu hỏi lên màn hình video, sẽ giúp bạn nhanh chóng tư vấn và giải đáp mọi thắc mà khách hàng đưa ra.</p>
                                                  <img src="/public/images/1516329243_computer.png" alt=""/>
                                              </div>
                                          </div>
                                                                  <div>
                                              <div class="item-cate">
                                                  <h4 class="title-cate">
                                                      <span class="number">02</span><span class="right-title">Game tương tác</span>
                                                  </h4>
                                                  <p class="descript">Chưa bao giờ tiếp cận với người dùng lại dễ dàng đến như vậy. Game tương tác giúp bạn tự tạo ra chủ đề trò chơi của chính mình. Thông qua đó dễ dàng nắm bắt tâm lý tò mò, thích khám phá của khán giả, mang lại hiệu quả tương tác tốt nhất và lượng người theo dõi khủng.</p>
                                                  <img src="/public/images/1516329261_computer.png" alt=""/>
                                              </div>
                                          </div>
                                                                  <div>
                                              <div class="item-cate">
                                                  <h4 class="title-cate">
                                                      <span class="number">03</span><span class="right-title">Phỏng vấn</span>
                                                  </h4>
                                                  <p class="descript">Phỏng vấn thông qua GoStream - với hình ảnh sắc nét, âm thanh chân thực sẽ giúp cho người dùng tiết kiệm được thời gian, tiết kiệm được chi phí; tạo không khí thoải mái và dễ dàng trao đổi công việc một cách tinh tế.</p>
                                                  <img src="/public/images/1516329282_computer.png" alt=""/>
                                              </div>
                                          </div>
                                                                  <div>
                                              <div class="item-cate">
                                                  <h4 class="title-cate">
                                                      <span class="number">04</span><span class="right-title">Giao lưu</span>
                                                  </h4>
                                                  <p class="descript">“Livestream – đập tan mọi khoảng cách”. Đây chính là thông điệp mà GoStream gửi tới người dùng, khi sử dụng công cụ quay video trực tiếp. Ngoài việc người nổi tiếng giao lưu với FAN cùng mong muốn: kết nối và gần gũi khán giả; thì bất kỳ ai sử dụng công cụ này cũng đều trở nên thân thiện và được nhiều người biết đến.</p>
                                                  <img src="/public/images/1516329299_computer.png" alt=""/>
                                              </div>
                                          </div>
                                                                  <div>
                                              <div class="item-cate">
                                                  <h4 class="title-cate">
                                                      <span class="number">05</span><span class="right-title">Bán hàng</span>
                                                  </h4>
                                                  <p class="descript">Trong thời đại bùng nổ marketing online, GoStream chính là giải pháp cứu cánh, ưu việt nhất cho các đơn vị kinh doanh qua mạng xã hội. Với mong muốn quảng bá thương hiệu, sản phẩm rộng khắp toàn cầu, GoStream dễ dàng giúp người dùng giới thiệu sản phẩm và website một cách tự nhiên, đơn giản, tiết kiệm và thu hút đông đảo người quan tâm.</p>
                                                  <img src="/public/images/1516329316_computer.png" alt=""/>
                                              </div>
                                          </div>
                                                                                                          
                                      </div>
                                  </div>
                                  <div class="col-md-6 col-md-offset-1 col-sm-6 col-xs-12 screen-min hiden-screen-ipad">                
                                                      
                                      <div class="box-list-slide" style="background-image: url('/public/images/bg-slider.png');">
                                              <div class="slider slider-nav1">
                                                                                                                                          
                                                  <div class="item-list list01">
                                                      <img src="/public/images/1516284913_list1.png" alt=""/>
                                                      <p class="title">Hỏi Đáp</p>
                                                  </div>
                                                                                                          
                                                  <div class="item-list list02">
                                                      <img src="/public/images/1516284979_list2.png" alt=""/>
                                                      <p class="title">Game tương tác</p>
                                                  </div>
                                                                                                          
                                                  <div class="item-list list03">
                                                      <img src="/public/images/1516285015_list3.png" alt=""/>
                                                      <p class="title">Phỏng vấn</p>
                                                  </div>
                                                                                                          
                                                  <div class="item-list list04">
                                                      <img src="/public/images/1516285049_list4.png" alt=""/>
                                                      <p class="title">Giao lưu</p>
                                                  </div>
                                                                                                          
                                                  <div class="item-list list05">
                                                      <img src="/public/images/1516285091_list5.png" alt=""/>
                                                      <p class="title">Bán hàng</p>
                                                  </div>
                                                                              </div>
                                          <div class="center">     
                                              <img src="/public/images/center.png" alt=""/>
                                          </div>
                                      </div>
                                  </div>               
                              </div>
                          </div>
                      </section>
                    
      
                      <section class="post-guide guide-home">
                          <h4 class="title-ss title-bf text-centter">Bảng giá </h4>
                          <div class="row">
                              <div class="container">
                                  <div class="table-pri">
                                                          
                                      <div class="item-pri " style="background-color: #d7d7d7">
                                          <div class="icon_pri">
                                              <img src="/public/images/1576510951_1516503672_imgpsh_fullsize-2.png" alt=""/>
                                          </div>
                                          <h4 class="name-pri">Free</h4>
                                          <div class="des-pricing">
                                              <div class="number-pri">
                                                  <sup></sup><span class="max_pricing">0</span><span>/tháng</span>
                                              </div>
                                              <ul class="list-pricing">
                                                  <li>Số live stream - <span class="title-bold">1 </span>Stream FB/ngày</li>
                                                  <li>Live stream cùng lúc - <span class="title-bold">1 </span>luồng</li>
                                                  <li>Độ dài tối đa live stream - <span class="title-bold">0.5 </span>giờ</li>
                                                  <li>Chất lượng - <span class="title-bold"> 480p</span></li>
                                                  <li>Game tương tác - <span class="title-bold">Hạn chế</span></li>
                                                  <li><span class="title-bold">Quảng cáo GoStream</span></li>
                                              </ul>
                                              <div class="btn-buy">
                                                  <a class="link-pri hvr-float-shadow" href="#signup-free" title="" style="background-color: #959595">Mua ngay</a>
                                              </div>
                                          </div>
                                      </div>
                                                          
                                      <div class="item-pri " style="background-color: #f6c163">
                                          <div class="icon_pri">
                                              <img src="/public/images/1576510790_1516503739_imgpsh_fullsize-3.png" alt=""/>
                                          </div>
                                          <h4 class="name-pri">Basic</h4>
                                          <div class="des-pricing">
                                              <div class="number-pri">
                                                  <sup></sup><span class="max_pricing">99K</span><span>/tháng</span>
                                              </div>
                                              <ul class="list-pricing">
                                                  <li>Số live stream - <span class="title-bold">10 </span>Stream FB/ngày</li>
                                                  <li>Live stream cùng lúc - <span class="title-bold">3 </span>luồng</li>
                                                  <li>Độ dài tối đa live stream - <span class="title-bold">2 </span>giờ</li>
                                                  <li>Chất lượng - <span class="title-bold"> 480p</span></li>
                                                  <li>Game tương tác - <span class="title-bold">Hạn chế</span></li>
                                                  <li><span class="title-bold">Không quảng cáo</span></li>
                                              </ul>
                                              <div class="btn-buy">
                                                  <a class="link-pri hvr-float-shadow" href="#signup-free" title="" style="background-color: #959595">Mua ngay</a>
                                              </div>
                                          </div>
                                      </div>
                                                          
                                      <div class="item-pri " style="background-color: #4ac56b">
                                          <div class="icon_pri">
                                              <img src="/public/images/1516336008_imgpsh_fullsize-1.png" alt=""/>
                                          </div>
                                          <h4 class="name-pri">Plus</h4>
                                          <div class="des-pricing">
                                              <div class="number-pri">
                                                  <sup></sup><span class="max_pricing">199K</span><span>/tháng</span>
                                              </div>
                                              <ul class="list-pricing">
                                                  <li>Số live stream - <span class="title-bold">20 </span>Stream FB/ngày</li>
                                                  <li>Live stream cùng lúc - <span class="title-bold">3 </span>luồng</li>
                                                  <li>Độ dài tối đa live stream - <span class="title-bold">4 </span>giờ</li>
                                                  <li>Chất lượng - <span class="title-bold">720p</span></li>
                                                  <li>Game tương tác - <span class="title-bold">Không hạn chế</span></li>
                                                  <li><span class="title-bold">Quảng cáo tự chọn</span></li>
                                              </ul>
                                              <div class="btn-buy">
                                                  <a class="link-pri hvr-float-shadow" href="#signup-free" title="" style="background-color: #959595">Mua ngay</a>
                                              </div>
                                          </div>
                                      </div>
                                                          
                                      <div class="item-pri " style="background-color: #eb6357">
                                          <div class="icon_pri">
                                              <img src="/public/images/1516336102_imgpsh_fullsize.png" alt=""/>
                                          </div>
                                          <h4 class="name-pri">Premium</h4>
                                          <div class="des-pricing">
                                              <div class="number-pri">
                                                  <sup></sup><span class="max_pricing">599K</span><span>/tháng</span>
                                              </div>
                                              <ul class="list-pricing">
                                                  <li>Số live stream - <span class="title-bold">25 </span>Stream FB/ngày</li>
                                                  <li>Live stream cùng lúc - <span class="title-bold">7 </span>luồng</li>
                                                  <li>Độ dài tối đa live stream - <span class="title-bold">5 </span>giờ</li>
                                                  <li>Chất lượng - <span class="title-bold">1080p</span></li>
                                                  <li>Game tương tác - <span class="title-bold">Không hạn chế</span></li>
                                                  <li><span class="title-bold">Quảng cáo tự chọn</span></li>
                                              </ul>
                                              <div class="btn-buy">
                                                  <a class="link-pri hvr-float-shadow" href="#signup-free" title="" style="background-color: #959595">Mua ngay</a>
                                              </div>
                                          </div>
                                      </div>
                                                      </div>
                              </div>
                          </div>
                      </section>
      
      
                      <section class="main-section section-full fix-ss" style="padding-bottom: 0px">
                                  <div class="full-left">
                              <img class="wow bounceInLeft" src="/template/images/1516323920_iphone.png" alt=""/>
                          </div>
                          <div class="container box-poisition">
                              <div class="row box-top">
                                  <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-6 full-right full-screen">
                                      <h4 class="title-ss text-left-bf">ỨNG DỤNG DI ĐỘNG</h4>
                                      <div class="descript"><p><p>Với c&ocirc;ng cụ Gostream giờ đ&acirc;y bạn c&oacute; thể livestream từ c&aacute;c video được thu sẵn, từ c&aacute;c nguồn camera kh&aacute;ch nhau v&agrave; ph&aacute;t h&agrave;nh c&ugrave;ng l&uacute;c tr&ecirc;n c&aacute;c mạng x&atilde; hội Facebook, Twitter, Youtube,...<br />
                  <br />
                  Bạn c&oacute; thể Livestream ở bất cứ nơi n&agrave;o m&agrave; bạn chỉ cần c&agrave;i đặt app Gostream tr&ecirc;n điện thoại của m&igrave;nh m&agrave; kh&ocirc;ng cần d&ugrave;ng đến m&aacute;y t&iacute;nh. Thật l&agrave; tuyệt vời đ&uacute;ng kh&ocirc;ng.<br />
                  <br />
                  Ngo&agrave;i ra bạn c&oacute; thể tạo mini game ngay tr&ecirc;n điện thoại ở bất cứ nơi đ&acirc;u.</p>
                  </p>
                                      </div>
                                      <div class="btn-store">
                                          <a href="https://play.google.com/store/apps/details?id=godream.app.gostream&hl=vi" target="_blank" class="item-store app-store" style="background-image: url(/skin/frontend/default/img/google-play.png);"></a>
                                          <a href="https://apps.apple.com/us/app/gostream-livestream/id1272030029" target="_blank" class="item-store google-play" style="background-image: url(/skin/frontend/default/img/app-store.png);"></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                              </section>
      
                      <section class="main-section section-full signup-section" id="signup-free">
                                      <h4 class="title-ss title-bf text-centter">Đăng ký miễn phí </h4>
      
                              
                              <iframe class="iframe-signup " src="https://gostream.co/signup-iframe/E9WDpxAtqvdb8dBWtDEO?lang=vi" frameborder="0"></iframe>
                              </section>
      
      
                    </main>
                    
                    <footer class="gd-footer">
                      <footer class="gd-footer">
                      <div class="content-footer">
                          <div class="container">
                              <div class="row">
                                  <div class="col-md-4 col-sm-6 col-xs-6">
                                      <div class="logo-footer" style="background-image: url('/template/images/img/logo3.png');">
                                      </div>
                                      <p class="des-ct" property="description">
                                          <aside id="text-2" class="widget widget_text">         
                                              <div class="textwidget">
                                                  <p>C&Ocirc;NG TY CỔ PHẦN C&Ocirc;NG NGHỆ GOSTREAM<br />
                                                    Số GCNDKDN: 2901907358 do Sở Kế hoạch v&agrave; Đầu tư Nghệ An cấp ng&agrave;y 25/10/2017<br />
                                                    Người đại diện theo ph&aacute;p luật: NGHI&Ecirc;M TIẾN VIỄN<br />
                                                    Trụ sở ch&iacute;nh: Số 75A, đường Nguyễn Thị Minh Khai, Phường L&ecirc; Mao, Th&agrave;nh phố Vinh, Tỉnh Nghệ An, Việt Nam<br />
                                                    Văn ph&ograve;ng đại diện: Lầu 9, FBA Tower, 487 Điện Bi&ecirc;n Phủ, Phường 3, Quận 3, TP.HCM<br />
                                                    Hotline: 1900277255 - Email: contact@gostream.vn</p>
      
                                                  <p><span style="font-size:10px"><a href="https://bit.ly/2NNvKYC" target="_blank"><img alt="" src="https://gostream.co/static/images/bocongthuong.png" style="height:76px; width:200px" title="" /></a></span></p>
                  
                                              </div>
                                          </aside>
                                      </p>
                                  </div>
                                  <div class="col-md-3 col-sm-6  col-xs-6 ">
                                      <aside id="support_widget_name-2" class="widget widget_support_widget_name"> 
                                                
                                          <h3 class="widget-title">Hỗ trợ</h3> 
                                          <div class="contact go-ul">                        
                                              <p>1.&nbsp;<a href="https://www.gostream.co/blog/chinh-sach-cua-gostream.html">Ch&iacute;nh s&aacute;ch &amp; quy định chung</a></p>
      
                  <p>2.&nbsp;<a href="https://www.gostream.co/blog/chinh-sach-bao-mat-thong-tin-ca-nhan.html">Ch&iacute;nh s&aacute;ch bảo mật th&ocirc;ng tin c&aacute; nh&acirc;n</a></p>
      
                  <p>3.&nbsp;<a href="https://www.gostream.co/blog/chinh-sach-bao-mat-thong-tin-thanh-toan.html">Chinh s&aacute;ch bảo mật th&ocirc;ng tin thanh to&aacute;n</a></p>
      
                  <p>4.&nbsp;<a href="https://www.gostream.co/blog/chinh-sach-hoan-tiendoi-tra.html">Ch&iacute;nh s&aacute;ch ho&agrave;n tiền/đổi trả</a></p>
      
                  <p>5.&nbsp;<a href="https://www.gostream.co/blog/huong-dan-thanh-toan.html">Hướng dẫn thanh to&aacute;n</a></p>
      
                  <p>6.&nbsp;<a href="https://www.gostream.co/blog/quy-trinh-cung-ung-dich-vu.html">Quy tr&igrave;nh cung ứng dịch vụ</a></p>
      
                  <p>7.&nbsp;<a class="subtitle" href="https://www.facebook.com/gostreamtool/" target="_blank">Trung t&acirc;m hỗ trợ</a></p>
                                          </div>           
                                      </aside>
                                  </div>
                                  <div class="col-md-3 col-sm-6 col-xs-6">
      
                                      <aside id="support_menu_footer_name-2" class="widget widget_support_menu_footer_name">            
                                                
                                          <h3 class="widget-title">Tính năng</h3> 
                                          <div class="go-ul">                        
                                              <ul>
                    <li><a class="subtitle" href="https://www.gostream.co">Livestream từ video c&oacute; sẵn</a></li>
                    <li><a class="subtitle" href="https://www.gostream.co">B&igrave;nh chọn trực tuyến</a></li>
                    <li><a class="subtitle" href="https://www.gostream.co">Tr&ograve; chơi trực tuyến</a></li>
                    <li><a class="subtitle" href="https://www.gostream.co">Live stream từ nhiều nguồn</a></li>
                    <li><a class="subtitle" href="https://www.gostream.co">Live stream tr&ecirc;n đa nền tảng</a></li>
                  </ul>
                          </div>           
                      </aside>
      
                      <aside id="support_menu_footer_name-2" class="widget widget_support_menu_footer_name">            
                                                
                          <h3 class="widget-title">Chấp nhận thanh toán</h3> 
                          <div class="go-ul">                        
                              <div style="background-color: #fff; padding: 5px; border: 1px solid #ebebeb; margin-right: 5px; margin-bottom: 5px; display: inline-block; vertical-align: middle; line-height: normal;"><img alt="" src="https://www.gostream.co/uploads/logo_payment/logo_visa.jpg" style="height:30px; vertical-align:middle; width:40px" /></div>
      
                  <div style="background-color: #fff; padding: 5px; border: 1px solid #ebebeb; margin-right: 5px; margin-bottom: 5px; display: inline-block; vertical-align: middle; line-height: normal;"><img alt="" src="https://www.gostream.co/uploads/logo_payment/logo_mastercard.png" style="height:30px; vertical-align:middle; width:40px" /></div>
      
                  <div style="background-color: #fff; padding: 5px; border: 1px solid #ebebeb; margin-right: 5px; margin-bottom: 5px; display: inline-block; vertical-align: middle; line-height: normal;"><img alt="" src="https://www.gostream.co/uploads/logo_payment/logo_jcb.png" style="height:30px; vertical-align:middle; width:40px" /></div>
      
                  <div style="background-color: #fff; padding: 5px; border: 1px solid #ebebeb; margin-right: 5px; margin-bottom: 5px; display: inline-block; vertical-align: middle; line-height: normal;"><img alt="" src="https://www.gostream.co/uploads/logo_payment/logo_paypal.png" style="height:30px; vertical-align:middle; width:40px" /></div>
      
                  <div style="background-color: #fff; padding: 5px; border: 1px solid #ebebeb; margin-right: 5px; margin-bottom: 5px; display: inline-block; vertical-align: middle; line-height: normal;"><img alt="" src="https://www.gostream.co/uploads/logo_payment/logo_payoo.png" style="height:30px; vertical-align:middle; width:40px" /></div>
      
                  <div style="background-color: #fff; padding: 5px; border: 1px solid #ebebeb; margin-right: 5px; margin-bottom: 5px; display: inline-block; vertical-align: middle; line-height: normal;"><img alt="" src="https://www.gostream.co/uploads/logo_payment/logo_vnpay.png" style="height:30px; vertical-align:middle; width:40px" /></div>
      
                  <div style="background-color: #fff; padding: 5px; border: 1px solid #ebebeb; margin-right: 5px; margin-bottom: 5px; display: inline-block; vertical-align: middle; line-height: normal;"><img alt="" src="https://www.gostream.co/uploads/logo_payment/logo_vtcpay.png" style="height:30px; vertical-align:middle; width:40px" /></div>
                                          </div>           
                                      </aside>
      
                                  </div>
                                  <div class="col-md-2 col-sm-6 col-xs-6 padding-left">
                                      <aside id="sosial_network-2" class="widget widget_sosial_network">            
                                          <h3 class="widget-title">Kết nối với chúng tôi</h3>            
                                              <ul class="go-ul">
                                                  <li>
                                                      <a class="subtitle" target="_blank" href="https://www.facebook.com/gostreamtool/"><i class="fa fa-facebook"></i> Facebook</a>
                                                  </li>
                                                  <li>
                                                      <a class="subtitle" target="_blank" href="http://www.gostream.co/"><i class="fa fa-users"></i> Gostream Community</a>
                                                  </li>
                                                  <li>
                                                      <a class="subtitle" target="_blank" href="https://www.youtube.com/channel/UCpzxbQKq-FgLVImkAlCYLlg"><i class="fa fa-youtube-play"></i> Youtube</a>
                                                  </li>
                                                  <li>
                                                      <a class="subtitle" target="_blank" href="https://web.skype.com/en/"><i class="fa fa-skype"></i> Skype</a>
                                                  </li>
                                              </ul>   
                                      </aside>
                                          
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="copyright-footer">
                          <div class="container">
                              <div class="row">
                                  <div class="col-sm-6 col-sm-6 col-xs-12">
                                      <div class="copyright">
                                          © Copyright 2017 - <a href="https://gostreamtech.com" title="GoStream JSC" target="_blank">GoStream JSC</a>.                    </div>
                                  </div>
                                  <div class="col-sm-6 col-sm-6 col-xs-12">
                                      <p class="design-foot"> Designed & developed by <a href="https://gostreamtech.com" title="GoStream">GoStream</a>.</p>
                                  </div>
                              </div>
                          </div>
      
                          <div class="be-scroll-top" style="display: none;"></div>
                      </div>
      
                      <div id="policyPopup" class="modal-popup-policy modal fade" role="dialog" data-backdrop="static">
                          <div class="modal-dialog">
      
                              <div class="modal-content">
                                  <div class="modal-body">
                                      <p>Khi bắt đầu sử dụng dịch vụ tại website của Gostream, Quý khách đồng ý với <a href="https://www.gostream.co/blog/chinh-sach-cua-gostream.html?lang=vn" target="_blank">các điều khoản chung và chính sách</a> của Gostream.</p>
                                      <div style="text-align: right;">
                                          <button type="button" class="btn btn-accept " data-dismiss="modal">Đồng ý</button>
                                      </div>
                                  </div>
                              </div>
      
                      </div>
                  </div>
                  </footer>	
      
                </footer>
                    
                  <div class="modal fade" id="modalProject" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <span class="close nc-icon-mini ui-1_circle-remove" data-dismiss="modal" aria-label="Close"></span>
                          <h4 class="modal-title" id="myModalLabel">
                            
                          </h4>
                        </div>
                        <div class="modal-body">
                          <div class="link">
                            <i class="fa fa-link" aria-hidden="true"></i>
                            <a href="" title="" target="_blank"></a>
                          </div>
                          <div class="des">
                            
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
          );
    }
}
export default Home;