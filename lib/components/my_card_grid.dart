import 'package:flutter/material.dart';

class MyCardGrid extends StatelessWidget {
  MyCardGrid(
      {this.spacing = 0.0,
      this.crossAxisCount = 2,
      this.width = 500.0,
      this.dataSource});
  final List dataSource;
  final int crossAxisCount;
  final double width;
  final double spacing;
  @override
  Widget build(BuildContext context) {
    double itemWidth = (width - crossAxisCount * spacing - spacing) /
        this.crossAxisCount.toDouble();
    return Wrap(
      spacing: spacing, // gap between adjacent chips
      runSpacing: spacing, // gap between lines
      children: <Widget>[
        for (var item in dataSource)
          Container(
            color: Colors.white,
            width: itemWidth,
            child: GestureDetector(
              onTap: () {},
              child: Column(
                children: <Widget>[
                  Padding(
                    child: Text(item['title'],
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(color: Colors.grey, fontSize: 14)),
                    padding: EdgeInsets.only(top: 4.0, bottom: 8.0),
                  ),
                ],
              ),
            ),
          ),
      ],
    );
  }
}
