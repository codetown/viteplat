import 'package:flutter/cupertino.dart';

class MyCard extends StatelessWidget {
  MyCard({this.child, this.width, this.margin, this.padding});
  final Widget child;
  final EdgeInsetsGeometry margin;
  final EdgeInsetsGeometry padding;
  final double width;
  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(8.0),
      child: Container(
        margin: margin,
        padding: padding,
        width: width,
        child: child,
        decoration: BoxDecoration(color: CupertinoColors.white, boxShadow: [
          BoxShadow(
              color: CupertinoColors.systemGrey5,
              spreadRadius: 1.0,
              blurRadius: 1.0,
              offset: Offset(1.0, 1.0))
        ]),
      ),
    );
  }
}
