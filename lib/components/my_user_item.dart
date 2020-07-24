import 'package:flutter/cupertino.dart';

class MyUserItem extends StatelessWidget {
  const MyUserItem(
      {Key key, this.imageUrl, this.title, this.subtitle, this.tag});
  final String imageUrl;
  final String title;
  final String subtitle;
  final String tag;

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisAlignment: MainAxisAlignment.start,
      children: <Widget>[
        Image.network(
          imageUrl,
          width: 72.0,
          height: 72.0,
          fit: BoxFit.fill,
        ),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.only(left: 8.0, right: 8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                this.tag == null || this.tag == ""
                    ? Padding(
                        padding: const EdgeInsets.only(bottom: 2.0),
                        child: Text(
                          title,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: TextStyle(fontSize: 16.0, height: 1.5),
                        ),
                      )
                    : Padding(
                        padding: const EdgeInsets.only(bottom: 2.0),
                        child: Row(
                          children: <Widget>[
                            Text(
                              title,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: TextStyle(fontSize: 16.0, height: 1.5),
                            ),
                            Text(
                              tag,
                              style: TextStyle(fontSize: 12.0),
                            ),
                          ],
                        ),
                      ),
                Text(
                  subtitle,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                      fontSize: 14.0,
                      color: CupertinoColors.systemGrey,
                      height: 1.5),
                ),
              ],
            ),
          ),
        ),
        SizedBox(
          width: 8.0,
          height: 72.0,
        )
      ],
    );
  }
}
