import 'package:carousel_slider/carousel_slider.dart';
import 'package:cmvideo/components/my_grid.dart';
import 'package:flutter/material.dart';
class Home extends StatefulWidget {
  Home({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    double screenWidth = MediaQuery.of(context).size.width;
    return ListView(
        padding: EdgeInsets.only(top: 16.0, left: 0, right: 0, bottom: 16.0),
        children: <Widget>[
          CarouselSlider(
            options: CarouselOptions(
                autoPlay: true, viewportFraction: 1, aspectRatio: 532 / 280),
            items: [1, 2, 3, 4, 5].map((i) {
              return ClipRRect(
                borderRadius: BorderRadius.circular(8.0),
                child: Image.network(
                  "https://gitee.com/codetown/codedata/raw/master/cmovie/images/s$i.jpg",
                  width: screenWidth - 32,
                  fit: BoxFit.fill,
                ),
              );
            }).toList(),
          ),
          Container(
            padding: EdgeInsets.only(
                top: 16.0, left:24.0, right: 24.0, bottom: 8.0),
            child: Row(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(right: 8.0),
                  child: Icon(
                    IconData(0xe6b9, fontFamily: 'Iconfont'),
                    color: Colors.redAccent,
                    size: 20.0,
                  ),
                ),
                Text("热播榜单",
                    style: TextStyle(
                        fontSize: 18,
                        color: Colors.redAccent,
                        fontWeight: FontWeight.bold)),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 16.0, right: 16.0),
            child: MyGrid(
              spacing: 16.0,
              width: screenWidth - 32.0,
              crossAxisCount: 2,
            ),
          ),
          Container(
            padding: const EdgeInsets.only(
                top: 16.0, left: 24.0, right: 24.0, bottom: 8.0),
            child: Row(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(right: 8.0),
                  child: Icon(IconData(0xe759, fontFamily: 'Iconfont'),
                      color: Colors.greenAccent, size: 22.0),
                ),
                Text("热门电影",
                    style: TextStyle(
                      fontSize: 18,
                      color: Colors.greenAccent,
                      fontWeight: FontWeight.bold,
                    )),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 16.0, right: 16.0),
            child: MyGrid(
              spacing: 16.0,
              width: screenWidth - 32.0,
              crossAxisCount: 2,
            ),
          ),
          Container(
            padding: const EdgeInsets.only(
                top: 16.0, left: 24.0, right: 24.0, bottom: 8.0),
            child: Row(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(right: 8.0),
                  child: Icon(IconData(0xe647, fontFamily: 'Iconfont'),
                      color: Colors.blueAccent, size: 24.0),
                ),
                Text(
                  "热门电视剧",
                  style: TextStyle(
                    fontSize: 18,
                    color: Colors.blueAccent,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 16.0, right: 16.0),
            child: MyGrid(
              spacing: 16.0,
              width: screenWidth - 32.0,
              crossAxisCount: 2,
            ),
          ),
          Container(
            padding: const EdgeInsets.only(
                top: 16.0, left: 24.0, right: 24.0, bottom: 8.0),
            child: Row(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(right: 8.0),
                  child: Icon(IconData(0xe643, fontFamily: 'Iconfont'),
                      color: Color(0xffd8d822), size: 22.0),
                ),
                Text(
                  "热门动漫",
                  style: TextStyle(
                      fontSize: 18,
                      color: Color(0xffd8d822),
                      fontWeight: FontWeight.bold),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 16.0, right: 16.0),
            child: MyGrid(
              spacing: 16.0,
              width: screenWidth - 32.0,
              crossAxisCount: 2,
            ),
          ),
        ],
    );
  }
}
