for file in ./*
do
    if test -f $file
    then
        if [ "${file##*.}" = "js" ];then
            echo "|0|["$(basename $file .js)"](https://leetcode.com/problems/$(basename $file .js)/)|[js]($file)|true|" >> readme.md
        fi
    fi
done
