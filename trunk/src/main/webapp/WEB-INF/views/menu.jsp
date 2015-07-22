<!-- HEADER -->
<header id="header" class="header">
  <div class="container"> 
    
    <!-- LOGO -->
    <div class="logo"><a href="#/"><img src="/tidels/resources/images/logo.jpg" alt="Tidels" title="Tidels"></a></div>
    <!-- END / LOGO --> 
    
    <!-- NAVIGATION -->
    <nav class="navigation">
      <div class="open-menu"> <span class="item item-1"></span> <span class="item item-2"></span> <span class="item item-3"></span> </div>
      
      <!-- MENU -->
      <ul class="menu">
        <li class="current-menu-item"><a href="#/">Home</a></li>
        <li class="menu-item-has-children"><a href="#/categories">Study</a></li>
        <li class="menu-item-has-children"><a href="#">About</a></li>
                <li class="menu-item-has-children" ng-show="!user.authenticated"><a href="{{httpPath}}#/login" menu-item>Log In</a></li>
            <li class="menu-item-has-children" ng-show="!user.authenticated"><a href="{{httpPath}}#/signup" menu-item>Sign Up</a></li>
            <li class="menu-item-has-children" ng-show="user.authenticated"><a href="{{httpPath}}#/user-profile">Welcome {{ user.first_name }}!</a></li>
            <li class="menu-item-has-children" ng-show="user.authenticated"><a href="{{httpPath}}#/"  ua-logout>Log Out</a></li>
      </ul>
      <!-- END / MENU --> 
      
      <!-- SEARCH BOX -->
      <div class="search-box"> <i class="icon fa fa-search fa-2 "></i>
        <div class="search-inner">
          <form>
            <input type="text" placeholder="key words">
          </form>
        </div>
      </div>
      <!-- END / SEARCH BOX --> 
      
    </nav>
    <!-- END / NAVIGATION --> 
    
  </div>
</header>
<!-- END / HEADER --> 

