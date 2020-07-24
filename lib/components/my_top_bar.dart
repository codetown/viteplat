import 'package:flutter/material.dart';

class MyTopBar extends StatefulWidget implements PreferredSizeWidget {
  @override
  State<StatefulWidget> createState() {
    return MyTopBarState();
  }

  @override
  Size get preferredSize => Size.fromHeight(54.0 + kToolbarHeight);
}

class MyTopBarState extends State<MyTopBar> {
  @override
  @override
  Widget build(BuildContext context) {
    return Container(
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
      ),
    );
  }
}
