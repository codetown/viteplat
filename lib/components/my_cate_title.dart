import 'package:flutter/material.dart';

class MyCateTitle extends StatelessWidget {
  MyCateTitle({this.iconCode,this.title, this.color});
  final int  iconCode;
  final String title;
  final Color  color;
  @override
  Widget build(BuildContext context) {
    return  Padding(
            padding: const EdgeInsets.only(
                top: 12.0, left: 20.0, right: 20.0, bottom: 12.0),
            child: Row(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(right: 8.0),
                  child: Icon(IconData(iconCode, fontFamily: 'Iconfont'),
                      color: color, size: 24.0),
                ),
                Text(
                  title,
                  style: TextStyle(
                      fontSize:18,
                      color: color,
                      fontWeight: FontWeight.bold),
                ),
              ],
            ),
          );
  }
}
