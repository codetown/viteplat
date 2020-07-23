import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

const String appName = "酷夢影視";
void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: appName,
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.red,
        // This makes the visual density adapt to the platform that you run
        // the app on. For desktop platforms, the controls will be smaller and
        // closer together (more dense) than on mobile platforms.
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: appName),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: PreferredSize(
        child: Container(
            alignment: Alignment.center,
            padding: EdgeInsets.only(
              top: MediaQuery.of(context).padding.top,
              left: 12.0,
              right: 12.0,
            ),
            child: Row(
              children: <Widget>[
                Expanded(
                  child: InkWell(
                    onTap: () {},
                    child: Container(
                      height: 36.0,
                      margin: const EdgeInsets.only(right: 8.0),
                      padding: const EdgeInsets.only(left: 8.0, right: 8.0),
                      alignment: Alignment.center,
                      child: Row(
                        children: <Widget>[
                          Icon(Icons.search),
                          Expanded(
                            child: Text(
                              "最近热映",
                              style: TextStyle(color: Colors.grey[600]),
                            ),
                          ),
                          Icon(Icons.launch)
                        ],
                      ),
                      decoration: BoxDecoration(
                          color: Color(0xccffffff),
                          borderRadius: BorderRadius.circular(18.0)),
                    ),
                  ),
                ),
                InkWell(
                  child: SizedBox(
                    width: 36.0,
                    height: 32.0,
                    child: Icon(
                      Icons.access_time,
                      color: Colors.white,
                    ),
                  ),
                  onTap: () {},
                ),
                InkWell(
                  child: SizedBox(
                    width: 36.0,
                    height: 32.0,
                    child: Icon(
                      Icons.calendar_today,
                      color: Colors.white,
                    ),
                  ),
                  onTap: () {},
                )
              ],
            ),
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [
                Colors.redAccent,
                Color(0xffff8866),
              ]),
              /*boxShadow: [
                BoxShadow(
                  color: Colors.grey[500],
                  blurRadius: 20.0,
                  spreadRadius: 1.0,
                )
              ]*/
            )),
        preferredSize: Size(MediaQuery.of(context).size.width, 54.0),
      ),
      body: ListView(children: <Widget>[
        CarouselSlider(
          options: CarouselOptions(
            aspectRatio: 10.0,
            reverse: true,
          ),
          items: [1, 2, 3, 4, 5].map((i) {
            return Builder(
              builder: (BuildContext context) {
                return Container(
                    width: MediaQuery.of(context).size.width,
                    margin: EdgeInsets.symmetric(horizontal: 5.0),
                    decoration: BoxDecoration(color: Colors.blueGrey),
                    child: Text(
                      'textxxx $i',
                      style: TextStyle(fontSize: 16.0),
                    ));
              },
            );
          }).toList(),
        ),
      ]),
    );
  }
}
