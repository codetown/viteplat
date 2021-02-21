import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../pages/home.dart';
import '../pages/cate.dart';
import '../pages/news.dart';
import '../pages/zone.dart';
import 'my_top_bar.dart';

class MyFrame extends StatefulWidget {
  MyFrame({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyFrameState createState() => _MyFrameState();
}

class _MyFrameState extends State<MyFrame> {
  int _index = 0;
  List<Widget> _pages = <Widget>[
      Home(),
      Cate(),
      News(),
      Zone(),
  ];

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: MyTopBar(),
        backgroundColor: Colors.white,
        body:_pages[_index],
        resizeToAvoidBottomInset: true,
        bottomNavigationBar:BottomNavigationBar(
          backgroundColor: Colors.white,
          showUnselectedLabels: true,
          unselectedFontSize: 14,
          unselectedItemColor: Colors.grey,
          selectedItemColor: Colors.blue,
          currentIndex: _index,
          onTap: (value) => {setState(() => _index = value)},
          type: BottomNavigationBarType.fixed,
          items: <BottomNavigationBarItem>[
            BottomNavigationBarItem(
              label:"首页",
              icon: Icon(
                Icons.home,
              ),
            ),
            BottomNavigationBarItem(
              label:"分类",
              icon: Icon(
                Icons.category,
              ),
            ),
            BottomNavigationBarItem(
              label:"新闻",
              icon: Icon(
                Icons.info,
              ),
            ),
            BottomNavigationBarItem(
              label:"我的",
              icon: Icon(
                Icons.person
              ),
            )
          ],
        ));
  }
}