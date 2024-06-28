#!bash
for d in `ls ./src/pages`
do
echo "{"
echo "  path:'"$d"',"
echo "  element: lazyLoad(lazy(()=>import('@/pages/"$d"')))"
echo "},"
done