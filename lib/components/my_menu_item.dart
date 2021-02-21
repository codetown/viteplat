import 'package:flutter/cupertino.dart';

class MyMenuItem extends StatelessWidget {
  const MyMenuItem(
      {Key key,
      this.imageName,
      this.title,
      this.subtitle = "",
      this.canEnter = true});
  final String imageName;
  final String title;
  final String subtitle;
  final bool canEnter;
  List<Widget> _getChildren() {
    List<Widget> childList = [
      Container(
          alignment: Alignment.center,
          height: 56.0,
          width: 56.0,
          child:Image.asset(
          "assets/images/" + imageName,
          width: 32.0,
          height: 32.0,
          fit: BoxFit.fill,
        )
          ),
      Expanded(
        child: Text(
          title,
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          style: TextStyle(fontSize: 16.0),
        ),
      ),
    ];
    if (this.subtitle != "") {
      childList.add(
        Text(
          this.subtitle,
          style: TextStyle(color: CupertinoColors.black),
        ),
      );
    }
    if (this.canEnter) {
      childList.add(
        Padding(
          padding: EdgeInsets.only(right: 10),
          child: Icon(CupertinoIcons.right_chevron,
              color: CupertinoColors.tertiaryLabel),
        ),
      );
    } else {
      childList.add(SizedBox(
        width: 16.0,
        height: 32,
      ));
    }
    return childList;
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      mainAxisAlignment: MainAxisAlignment.start,
      children: _getChildren(),
    );
  }
}
