import 'package:flutter/material.dart';

class MyGrid extends StatelessWidget {
  MyGrid(
      {this.spacing = 0.0,
      this.crossAxisCount = 2,
      this.width = 540.0,
      this.children});
  final List<Widget> children;
  final int crossAxisCount;
  final double width;
  final double spacing;
  @override
  Widget build(BuildContext context) {
    double itemWidth = (width - crossAxisCount * spacing - spacing) /
        this.crossAxisCount.toDouble();
    itemWidth = itemWidth.floorToDouble();
    return Wrap(
      spacing: spacing, // gap between adjacent chips
      runSpacing: spacing / 2, // gap between lines
      children: <Widget>[
        for (var item in children) SizedBox(width: itemWidth, child: item)
      ],
    );
  }
}
