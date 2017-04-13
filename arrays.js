var imgURLS = [
                        "https://i.redd.it/bmyxvz4ifypy.jpg",
                        "http://pngimg.com/uploads/dog/dog_PNG23605.png",
                        "https://img.buzzfeed.com/buzzfeed-static/static/2017-04/6/15/enhanced/buzzfeed-prod-fastlane-03/enhanced-5626-1491507976-1.png?downsize=715:*&output-format=auto&output-quality=auto",
                        "https://www.kccavaliers.com/data1/images/dsc_0110.jpg",
                        "http://24.media.tumblr.com/9eb7052c7fe451e4ea847d5a2f97af0a/tumblr_n160beu4tc1s8mgkyo4_1280.jpg",
                        "https://imgix.ranker.com/user_node_img/50023/1000440464/original/basket-of-dobermans-photo-u1?w=650&q=50&fm=jpg",
                        "http://68.media.tumblr.com/d37062e1f4beda6afef420b29eeef854/tumblr_mxg8hqyTMD1rs203no1_500.jpg",
                        "http://maxpixel.freegreatpicture.com/static/photo/1x/Cute-Yorkie-Pet-Autumn-Dog-Animal-Puppy-1283027.jpg",
                        "https://s-media-cache-ak0.pinimg.com/564x/b6/f0/27/b6f027d5f504f7ba5b4262c2c53ec5f3.jpg",
                        "http://i8.lisimg.com/5580268/740.jpg", //10
                        "https://i.ytimg.com/vi/XbaKwcE9SSk/maxresdefault.jpg",
                        "http://tailandfur.com/wp-content/uploads/2016/06/40-Cute-Siberian-Husky-Puppy-Pictures-Feature-Image.jpg",
                        "https://s-media-cache-ak0.pinimg.com/736x/4f/c2/00/4fc200a17d716f989373490e3665f267.jpg",
                        "http://buzzsharer.com/wp-content/uploads/2015/04/puppy-sleep-cute.jpg",
                        "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web04/2011/10/24/12/enhanced-buzz-32059-1319472148-34.jpg",
                        "https://s-media-cache-ak0.pinimg.com/736x/f6/89/d9/f689d9982937ba09ad634f9ec6443258.jpg",
                        "http://buzzsharer.com/wp-content/uploads/2016/01/cute-corgi-pup-photo-face-sitting.jpg",
                        "http://i.huffpost.com/gadgets/slideshows/372170/slide_372170_4315706_free.jpg",
                        "http://25.media.tumblr.com/tumblr_m90lx5EyhI1rpy15ro1_500.jpg",
                        "https://s-media-cache-ak0.pinimg.com/originals/37/31/53/3731530dd17857b279c371a750ed72c5.jpg", //20
                        "http://i.imgur.com/X5nGIEe.jpg",
                        "https://i.redd.it/x702hpgs3ypy.jpg",
                        "http://i.imgur.com/Pc82n6V.jpg",
                        "http://www.lifewithdogs.tv/wp-content/uploads/2015/05/5.16.15-Cutest-Sleeping-Puppies5.jpg",
                        "http://2.bp.blogspot.com/-jOjhkW1B38Y/UXOMienUmBI/AAAAAAAAIfY/t_Sts8doy7s/s1600/best+puppies+picture44.jpg",
                        "http://www.dumpaday.com/wp-content/uploads/2016/11/funny-animals-155.jpg",
                        "http://i.imgur.com/glffhVL.gif",
                        "https://assets.rbl.ms/487586/980x.jpg",
                        "http://www.dumpaday.com/wp-content/uploads/2013/07/good-dogs.jpg",
                        "https://pbs.twimg.com/media/Ad8Ld1-CAAAsl-X.jpg:large",//30
                        "https://thechive.files.wordpress.com/2011/04/chive-thursday-38.jpg?quality=85&strip=info&w=1282",
                        "https://s-media-cache-ak0.pinimg.com/736x/f9/d6/a5/f9d6a5af3dd3e07fa81cfbcf287f607f.jpg",
                        "http://www.dogreference.com/wp-content/uploads/2014/01/bigstock-Jack-Russell-terrier-lying-in-17649854-Nosnibor137.jpg",
                        "https://img.memesuper.com/a7837de80ea6fc5f4bc8650695a8eb5d_via-imgur-dog-memes-2016_1242-920.jpeg",
                        "https://img.buzzfeed.com/buzzfeed-static/static/2017-02/1/19/campaign_images/buzzfeed-prod-fastlane-01/19-dog-memes-that-will-warm-your-heart-2-6325-1485996002-6_big.jpg",
                        "https://thoughtcatalog.files.wordpress.com/2016/04/5r7x4qw.jpg?w=800&h=698",
                        "https://s-media-cache-ak0.pinimg.com/originals/22/b0/f3/22b0f3d19b9000c2a85307e989f978cf.jpg",
                        "https://s-media-cache-ak0.pinimg.com/736x/8e/d9/3c/8ed93c185969f2de010a055593665269.jpg",
                        "https://s-media-cache-ak0.pinimg.com/736x/4c/86/74/4c8674d3572363545a6461f2a107a8ca.jpg",
                        "https://pbs-h2.twimg.com/media/Cct1G6vVAAI9ZjF.jpg", //40
                        "https://s-media-cache-ak0.pinimg.com/236x/90/4a/20/904a2097b82eba8c480543f09f43571c.jpg",
                        "https://s-media-cache-ak0.pinimg.com/736x/2c/ca/64/2cca64c096495d03cd420cf631a7ef2a.jpg",
                        "http://www.whateverydogdeserves.com/wp-content/uploads/2016/08/ruffest-day-meme.jpg",
                        "https://s-media-cache-ak0.pinimg.com/736x/83/55/18/835518f55f0dc7409c4a606bf599592a.jpg",
                        "http://4.bp.blogspot.com/-8bNbBzTZkOg/VcIi1kNSdaI/AAAAAAAAEYQ/IQKkxnHCLa8/s1600/dogmeme12.jpg",
                        "https://s-media-cache-ak0.pinimg.com/736x/2e/d2/87/2ed287f807708112a8d90c8ccaf97943.jpg",
                        "https://s-media-cache-ak0.pinimg.com/736x/6a/28/54/6a2854362f1d7ce4e04f809a0ce62766.jpg",
                        "https://i0.wp.com/8bitnerds.objects.cdn.dream.io/wp-content/uploads/2015/08/Cute-and-Fluffy-Puppies-5.jpg?resize=360%2C270",
                        "http://picmia.com/img/1562152.jpg",
                        "http://data.whicdn.com/images/98125324/superthumb.jpg", //50
                        "https://img.memesuper.com/2d5b7bd12ce57bfcd452f2439d7723a2_puppy-meme-google-search-puppy-memes_431-576.jpeg",
                        "http://www.justviral.net/wp-content/uploads/2016/08/Cute-Fluffy-Border-Collie-Puppy.jpg",
                        "https://s-media-cache-ak0.pinimg.com/originals/a2/82/57/a2825731567a7f0b3600835e854960e9.jpg",
                        "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr03/2012/12/21/11/enhanced-buzz-16075-1356106006-0.jpg?downsize=715:*&output-format=auto&output-quality=auto",
                        "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr03/2012/12/21/11/enhanced-buzz-16886-1356106200-0.jpg?downsize=715:*&output-format=auto&output-quality=auto",
                        "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr01/2012/12/21/11/enhanced-buzz-4722-1356106324-0.jpg?downsize=715:*&output-format=auto&output-quality=auto",
                        "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr01/2012/12/21/11/enhanced-buzz-4724-1356106397-0.jpg?downsize=715:*&output-format=auto&output-quality=auto",
                        "https://s-media-cache-ak0.pinimg.com/originals/38/50/c0/3850c0aecfd57c6a4fbef226665413e5.jpg",
                        "http://www.dumpaday.com/wp-content/uploads/2016/06/funny-pictures-173.jpg",
                        "https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2013/02/best-sign-ever.jpg", //60
                        "https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2013/02/awesome-3.jpg",
                        "https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2013/02/awwww-2.jpg",
                        "https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2013/02/i-just-fell-down-from-how-cute-this-is.jpg"
];
                    
var parallelArray = [
                        "pic", "pic", "meme", "pic", "pic", "pic", "pic", "pic", "pic", "pic",          //10
                        "pic", "pic", "pic", "pic", "pic", "meme", "pic", "pic", "pic", "pic",          //20
                        "meme", "pic", "pic", "pic", "pic", "meme", "meme", "pic", "meme", "pic",       //30
                        "meme", "pic", "pic", "meme", "meme", "meme", "meme", "meme", "meme", "meme",   //40
                        "meme", "meme", "meme", "meme", "meme", "meme", "pic", "pic", "pic", "pic",     //50
                        "meme", "pic", "pic", "pic", "pic", "pic", "pic", "pic", "meme", "meme",        //60
                        "meme", "meme", "pic"
];








