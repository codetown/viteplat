import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class MyItem extends StatelessWidget {
  MyItem(
      {this.imageUrl,
      this.imageAspectRatio = 0.618,
      this.width,
      this.title,
      this.onTap});
  final String imageUrl;
  final double imageAspectRatio;
  final String title;
  final double width;
  final Function onTap;
  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      child: GestureDetector(
        onTap: onTap,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            ClipRRect(
              borderRadius: BorderRadius.circular(8.0),
              child: Image.network(
                imageUrl,
                width: width,
                height: width * imageAspectRatio,
                fit: BoxFit.fill,
              ),
            ),
            Padding(
              child: Text(title,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(fontSize: 16, color: Color(0xff666666))),
              padding: EdgeInsets.only(top: 4.0),
            ),
          ],
        ),
      ),
    );
  }
}
