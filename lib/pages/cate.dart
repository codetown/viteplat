import 'package:flutter/material.dart';
class Cate extends StatefulWidget {
  Cate({Key key, this.title}) : super(key: key);

  // This widget is the Cate page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _CateState createState() => _CateState();
}

class _CateState extends State<Cate> {
  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.

    // double screenWidth = MediaQuery.of(context).size.width;
    return ListView(
        padding: EdgeInsets.only(top: 16.0, left: 0, right: 0, bottom: 16.0),
        children: <Widget>[
          Text("CATE")
        ],
    );
  }
}
