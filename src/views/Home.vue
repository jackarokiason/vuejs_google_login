/* eslint-disable vue/no-parsing-error */
<template>
  <div class="main">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link href="./assets/css/animate.css" rel="stylesheet" />
    <link href="./assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="./assets/css/main.css" rel="stylesheet" />

   <nav class="navbar-white navbar-fixed-top">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 pull-left">
            <a class="custom_head animated fadein" href="/">
             <img src="../assets/images/logo.png" class="logo" width="50px" alt="" title=""/>
            </a>
          </div>
          <div class="col-sm-8 pull-right">
            <nav class="navbar-login pull-right">
              <ul class="nav navbar-nav tr-hd-rg">
                <li class="dropdown">
                  <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" uib-dropdown-toggle="" aria-expanded="false">
                    <span class="prof-img-frame img-circle user-img-upld">
                      <i class="fa fa-user" aria-hidden="true"></i>
                      <img alt="profile-img" height="40" width="40" src="../assets/images/male.png" />
                    </span>
                    <span class="name_trim ng-binding mt-2 user_name" id="name">
                      {{user.username}}
                    </span>
                  </a>
                  <ul class="dropdown-menu">
                    <li role="menuitem">
                      <a href="/profile">View Profile</a>
                    </li>
                    <li role="menuitem">
                      <a href="/edit_profile">Edit Profile</a>
                    </li>
                    <li role="menuitem">
                      <a href="/coins">Coins</a>
                    </li>
                    <li role="menuitem">
                      <a href="/feature">Features</a>
                    </li>
                    <li role="menuitem">
                        <a href="/">Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </nav>
    <!-- <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </div> -->

    <section class="inner-pg-dash">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <section class="project_pg profile-m-box section">
              <article class="pro_box" id="profile">
                  <div class="pro_head">
                        <div class="pro_right">
                            <div class="followsme">
                                <!-- <span>Followers&nbsp; <strong>25</strong></span>
                                <br>
                                <span>Following&nbsp; <strong>15</strong></span> -->
                            </div>
                        </div>
                        <div class="pro_left">
                            <div class="avator img"> <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="" title="" /> </div>
                            <h3>{{user.username}}</h3>
                            <span>Volunteer</span>
                            <br> <span class="">{{user.location}} -  {{user.country}}</span>
                            <br>
                            <br>
                            <!-- <span class="meta">Joined
                                2 years ago</span> <span class="dot"> <i class="fa fa-circle"
                                aria-hidden="true"></i>
                            </span>
                            <span class="meta"> visited few mins ago </span> -->
                        </div>
                    </div>
                    <div class="pro_foot">
                        <div class="content-box simple content box">
                            <div class="content-box simple-content">
                                <div class="pr-left-box">
                                    <nav>
                                        <ul>
                                            <li><a v-bind:href="this.user.github_handle" title="Github">
                                                <i class="fa fa-github-square link-icon"></i>
                                            </a></li>
                                            <li><a v-bind:href="this.user.linkedin_handle" title="Linkedin">
                                                <i class="fa fa-linkedin-square link-icon"></i>
                                            </a></li>
                                            <li><a v-bind:href="this.user.kaggle_handle" title="Stack Overflow"><i class="fa fa-stack-overflow link-icon" aria-hidden="true"></i>
                                            </a></li>
                                            <li><a href="#" class="follow_usr" title="Follow User">Follow User</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="pr-right-box">
                                    <nav>
                                        <ul>
                                            <li><span class="rank-block">Ranking: Beginner</span></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
              </article>
              <article class="pro article-block">
                <div class="content-box__title-bar">
                  <div class="content-box__title">Bio</div>
                </div>
                <div class="pro_cont">
                  <p id="bio">
                      {{user.bio}}
                  </p>
                </div>
              </article>

              <!-- Credits -->
              <article class="row">
                <div class="col-sm-12">

                  <article class="pro article-block">
                    <div class="content-box__title-bar">
                      <div class="content-box__title">
                        Coin and Score status
                      </div>
                    </div>
                    <div class="pro_cont credit-stat">
                      <div class="row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-12">
                          <table class="table-stats-pro">
                            <tr>
                              <td class="text-left">Coins</td>
                              <td class="text-right" id="total_tc">{{tact_coins.given_tact_coins}}</td>
                            </tr>
                            <tr>
                              <td class="text-left">ML Score</td>
                              <td class="text-right" id="ml_score">0</td>
                            </tr>
                            <tr>
                              <td class="text-left">Github Score</td>
                              <td class="text-right" id="git_score">0</td>
                            </tr>
                          </table>
                        </div>

                      </div>
                    </div>
                  </article>

                </div>
              </article>
              <!--/ Credits -->

              <!-- Features -->
              <article class="pro article-block">
                <div class="content-box__title-bar">
                  <div class="content-box__title">
                    Features
                    <div class="icon-com"></div>
                    <a href="features.html" class="title-more"
                      ><i class="fa fa-angle-right"></i
                    ></a>
                  </div>
                </div>
                <div class="pro_cont pro-list-sc">

                    <div class="teaser-list teaser-list-1-item-height">

                        <div v-if="features.length >= 1">
                          <div class="block-link block-link--bordered" v-for="feature in features" :key="feature.feature_id">
                              <a class="block-link__anchor" href="#"></a>
                              <div class="achievement-summary__highlight">
                                  <div class="achievement-summary__highlight__title">
                                      <p>
                                        <a v-bind:href="'/u/'+username+'/f/'+ feature.feature_url" v-bind:title=feature.title style="position: relative; z-index: 2; pointer-events: auto;">
                                          {{feature.title}}
                                        </a>
                                      </p>
                                      <p class="achievement-summary__highlight__subtitle">
                                        <span>{{feature.created_at_fuzzy}}</span>
                                        <span></span>
                                      </p>
                                  </div>
                                  <div class="achievement-summary__highlight__score">
                                      <div>
                                          <p> <b>{{feature.likes_count}}</b> </p>
                                          <p class="grey">kudos</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div v-else>
                            <p> No Result</p>
                        </div>
                    </div>
                </div>
              </article>
              <!--/ Features -->

              <!-- Certificates -->
              <article class="pro article-block">
                <div class="content-box__title-bar">
                  <div class="content-box__title">
                    Certificates

          <div class="icon-com"></div>
                    <a href="features.html" class="title-more"
                      ><i class="fa fa-angle-right"></i
                    ></a>
                  </div>
                </div>
                <div class="pro_cont pro-list-sc">

                    <div class="teaser-list teaser-list-1-item-height">

                        <div v-if="certificates">
                          <div class="block-link block-link--bordered" v-for="certificate in certificates" :key="certificate.certid">
                              <a class="block-link__anchor" href="#"></a>
                              <div class="achievement-summary__highlight">
                                  <div class="achievement-summary__highlight__title">
                                      <p>
                                        <a v-bind:href="'/certificate/'+ certificate.tact_certificate_id" v-bind:title=certificate.title style="position: relative; z-index: 2; pointer-events: auto;">
                                          {{certificate.title}}
                                        </a>
                                      </p>
                                      <p class="achievement-summary__highlight__subtitle">
                                        <span>{{certificate.added_at}}</span>
                                        <span></span>
                                      </p>
                                  </div>

                              </div>
                          </div>
                        </div>
                        <div v-else>
                          <p>No Certificates Available</p>
                        </div>

                    </div>

                </div>
              </article>
              <!--/ Certificates -->

              <!-- Badges -->
              <article class="pro article-block">
                  <div class="content-box__title-bar">
                      <div class="content-box__title">Badges</div>
                  </div>
                  <div class="pro_cont">
                      <div class="carousel-wrap">
                          <div class="owl-carousel row">
                              <div class="item col-sm-3 " v-for="badge in badges" :key="badge.badgeid">

                                  <div class="item" >
                                      <div class="badges-label" v-if="badge.badgeid">
                                        <!-- <img v-bind:src="badge.badge_image_location" /> -->
                                        <img v-bind:src="badge.badge_url" alt="Gister" title="Gister" />
                                        <h4>25</h4>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="pro_cont">
                      <div class="carousel-wrap">
                          <div class="owl-carousel row">
                              <div class="col-sm-12">
                                <a class="view-more" v-bind:href="'/u/'+username+'/badges'">view more</a>
                              </div>
                          </div>
                      </div>
                  </div>

              </article>
              <!--/ Badges -->

            </section>
          </div>
        </div>
      </div>
    </section>

  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="../assets/js/bmin.js"></script> -->

  </div>
</template>
<script></script>
<style>
.logo{
  margin-top: 10px;
}
.link-icon{
    color:#055791;
}

.navbar-nav .dropdown-menu{
    position:absolute !important;
}
.content-box__title{
    font-size:1.2em;
    font-weight:500;
    color:#44525f;
}
.table-stats-pro{
    font-size:1.2em !important;
    font-weight:400;
    color: #44525f;
}
.item img{
    max-width: 100%;
    height: 100px;
    border: #f5f5f5 1px solid;
  }
.view-more{
    color:black;
}

</style>
