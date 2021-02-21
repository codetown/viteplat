import 'package:cmvideo/components/my_menu_item.dart';
import 'package:flutter/material.dart';

//个人中心页面
class Zone extends StatefulWidget {
  Zone({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _ZoneState createState() => new _ZoneState();
}

class _ZoneState extends State<Zone> {
  Map<String, dynamic> _employee;

  @override
  void initState() {
    super.initState();
  }

  final myColors = [
    Color(0xff33c35f),
    Color(0xfffecd33),
    Color(0xfff54665),
    Color(0xff8342e4),
    Color(0xff2593fc)
  ];

  @override
  Widget build(BuildContext context) {
    double topHeight = MediaQuery.of(context).padding.top;
    // double cxtWidth = MediaQuery.of(context).size.width;
    double myIndent = 56;
    double myHeight = 1;
    return SingleChildScrollView(
        child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Container(
          padding: EdgeInsets.only(
            top: topHeight + 24,
            left: 16,
            right: 16,
            bottom: 24,
          ),
          // decoration: BoxDecoration(
          //     color:Colors.grey[100],
          //     image: DecorationImage(
          //         image: AssetImage("assets/images/icon03.png"), 
          //         fit: BoxFit.fill
          //     ),
          // ),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.only(right:16.0),
                child: ClipOval(
                 child:Material(
                   color:Colors.grey[200],
                   child: InkWell(
                      onTap: () {},
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: ClipOval(

                                  child: Image.network("https://gitee.com/codetown/codedata/raw/master/wetalk/avt101.jpg",width:64,height:64,fit:BoxFit.fill,),
                                ),
                            ),
                      ),
                 ),
                 ),
              ),
              Expanded(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Text("小赤佬",
                        style: TextStyle(
                            fontSize: 20.0,
                            fontWeight: FontWeight.w700)),
                    Text(
                      "阿拉木四上海您",
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
        Divider(height: myHeight),
        InkWell(
          child: MyMenuItem(imageName: "icon12.png", title: "我的公告"),
          onTap: () {
            // Navigator.of(context).push(
            //   PageRouteBuilder(
            //     pageBuilder: (BuildContext context, Animation<double> animation,
            //         Animation<double> secondaryAnimation) {
            //       return NoticeList(title: "我的公告", type: 1);
            //     },
            //   ),
            // );
          },
        ),
        Divider(indent: myIndent, height: myHeight),
        InkWell(
          child: MyMenuItem(imageName: "icon01.png", title: "我的消息"),
          onTap: () {
          },
        ),
        Divider(indent: myIndent, height: myHeight),
        InkWell(
          child: MyMenuItem(imageName: "icon02.png", title: "定时任务"),
          onTap: () {},
        ),
        Divider(indent: myIndent, height: myHeight),
        InkWell(
          child: MyMenuItem(
            imageName: "icon03.png",
            title: "我的邮箱",
            subtitle: _employee == null ? '' : _employee['email'],
          ),
          onTap: () {
          },
        ),
        Divider(indent: myIndent, height: myHeight),
        InkWell(
          child: MyMenuItem(
            imageName: "icon04.png",
            title: "我的手机",
            subtitle: _employee == null ? '' : _employee['telephone'],
          ),
          onTap: () {
          },
        ),
        Divider(indent: myIndent, height: myHeight),
        InkWell(
          child: MyMenuItem(imageName: "icon05.png", title: "修改密码"),
          onTap: () {
          },
        ),
        Divider(indent: myIndent, height: myHeight),
        InkWell(
          child: MyMenuItem(imageName: "icon06.png", title: "帮助中心"),
          onTap: () {},
        ),
        Divider(indent: myIndent, height: myHeight),
        InkWell(
          child: MyMenuItem(imageName: "icon07.png", title: "清除缓存"),
          onTap: () {},
        ),
        Divider(indent: myIndent, height: myHeight),
        MyMenuItem(
          imageName: "icon08.png",
          title: "关于版本",
          subtitle: "V1.0",
          canEnter: false,
        ),
        Divider(indent: myIndent, height: myHeight),
        InkWell(
            child: MyMenuItem(imageName: "icon09.png", title: "退出"),
            onTap: () {
              //删除本地缓存用户信息并跳转到登录页面
            },
        ),
        Divider(height: myHeight)
      ],
    ));
  }
}