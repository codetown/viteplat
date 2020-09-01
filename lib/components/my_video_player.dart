import 'package:flutter/material.dart';

class MyVideoPlayer extends StatefulWidget implements PreferredSizeWidget {
  @override
  State<StatefulWidget> createState() {
    return MyVideoPlayerState();
  }

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
}

class MyVideoPlayerState extends State<MyVideoPlayer> {
  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      padding: EdgeInsets.only(
        top: MediaQuery.of(context).padding.top,
        left: 16.0,
        right: 10.0,
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
                child: GestureDetector(
                  onTap: () {
                    print("跳转到搜索页面");
                  },
                  child: Row(
                    children: <Widget>[
                      Padding(
                        padding: const EdgeInsets.only(right: 4.0),
                        child: Icon(
                          Icons.search,
                          color: Colors.red[200],
                        ),
                      ),
                      Expanded(
                        child: Text(
                          "最近热映",
                          style: TextStyle(color: Colors.grey[600]),
                        ),
                      ),
                      Icon(Icons.iso, color: Colors.red[100])
                    ],
                  ),
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
      ),
    );
  }
}
