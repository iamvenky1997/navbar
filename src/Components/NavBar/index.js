import './index.css'
const NavBar = () =>{
 const Hamburgerer = () =>{
  let btn = document.querySelector("#btn");
  let sidebar = document.querySelector(".sidebar");
  let searchBtn = document.querySelector(".bx-search")

  btn.onclick = function(){
      sidebar.classList.toggle("active");
  }
  searchBtn.onclick = function() {
      sidebar.classList.toggle("active");
  }
 }
  return(
    <>
    <div class="sidebar active">
        <div class="logo_content">
            <div class="logo">
                <i class='bx bxl-c-plus-plus'></i>
                <div class="logoname">Brand Name</div>
            </div>
            <i class='bx bx-menu-alt-right' id="btn" onClick={Hamburgerer} ></i>
        </div>
        <ul class="nav_list">
            <li>
                
                <i class='bx bx-search'></i>
                <input type="text" placeholder="Search..." />
                <span class="tooltip">Search</span>
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-grid-alt'></i>
                    <span class="link_names">Dashboard</span>
                </a>
                <span class="tooltip">Dashboard</span>
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-user' ></i>
                    <span class="link_names">User</span>
                </a>
                <span class="tooltip">User</span>
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-chat' ></i>
                    <span class="link_names">Messages</span>
                </a>
                <span class="tooltip">Messages</span>
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-pie-chart-alt-2' ></i>
                    <span class="link_names">Analytics</span>
                </a>
                <span class="tooltip">Analytics</span>
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-folder' ></i>
                    <span class="link_names">Files</span>
                </a>
                <span class="tooltip">Files</span>
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-cart-alt' ></i>
                    <span class="link_names">Orders</span>
                </a>
                <span class="tooltip">Orders</span>
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-heart' ></i>
                    <span class="link_names">Liked</span>
                </a>
                <span class="tooltip">Liked</span>
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-cog' ></i>
                    <span class="link_names">Settings</span>
                </a>
                <span class="tooltip">Settings</span>
            </li>
        </ul>
        <div class="profile_content">
            <div class="profile">
                <div class="profile_details">
                    <img src="https://vz.cnwimg.com/wp-content/uploads/2014/01/alex.jpg?x86007" alt="" />
                    <div class="name_job">
                        <div class="name">Venkatesh</div>
                        <div class="job">Role</div>
                    </div>
                </div>
                <i class='bx bx-log-out' id="log_out"></i>
            </div>
        </div>
    </div>
    <div class="home_content">
        <div class="text">Home Content Here...</div>
    </div>
    </>
  )
}

export default NavBar