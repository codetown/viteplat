# AI笔记

## YOLOV10模型目标检测

### yolo10可以检测的物体

```c
#include <stdio.h>
#include <string.h>

// 定义结构体
typedef struct {
    int id;
    char english_name[50];
    char chinese_name[50];
} Category;

// 定义结构体数组
const Category categories[] = {
    {0, "person", "人"},
    {1, "bicycle", "自行车"},
    {2, "car", "汽车"},
    {3, "motorcycle", "摩托车"},
    {4, "airplane", "飞机"},
    {5, "bus", "公共汽车"},
    {6, "train", "火车"},
    {7, "truck", "卡车"},
    {8, "boat", "船"},
    {9, "traffic light", "交通信号灯"},
    {10, "fire hydrant", "消防栓"},
    {11, "stop sign", "停车标志"},
    {12, "parking meter", "停车计时器"},
    {13, "bench", "长凳"},
    {14, "bird", "鸟"},
    {15, "cat", "猫"},
    {16, "dog", "狗"},
    {17, "horse", "马"},
    {18, "sheep", "羊"},
    {19, "cow", "牛"},
    {20, "elephant", "大象"},
    {21, "bear", "熊"},
    {22, "zebra", "斑马"},
    {23, "giraffe", "长颈鹿"},
    {24, "backpack", "背包"},
    {25, "umbrella", "雨伞"},
    {26, "handbag", "手提包"},
    {27, "tie", "领带"},
    {28, "suitcase", "行李箱"},
    {29, "frisbee", "飞盘"},
    {30, "skis", "滑雪板"},
    {31, "snowboard", "滑雪板"},
    {32, "sports ball", "运动球"},
    {33, "kite", "风筝"},
    {34, "baseball bat", "棒球棒"},
    {35, "baseball glove", "棒球手套"},
    {36, "skateboard", "滑板"},
    {37, "surfboard", "冲浪板"},
    {38, "tennis racket", "网球拍"},
    {39, "bottle", "瓶子"},
    {40, "wine glass", "葡萄酒杯"},
    {41, "cup", "杯子"},
    {42, "fork", "叉子"},
    {43, "knife", "刀子"},
    {44, "spoon", "勺子"},
    {45, "bowl", "碗"},
    {46, "banana", "香蕉"},
    {47, "apple", "苹果"},
    {48, "sandwich", "三明治"},
    {49, "orange", "橙子"},
    {50, "broccoli", "西兰花"},
    {51, "carrot", "胡萝卜"},
    {52, "hot dog", "热狗"},
    {53, "pizza", "披萨"},
    {54, "donut", "甜甜圈"},
    {55, "cake", "蛋糕"},
    {56, "chair", "椅子"},
    {57, "couch", "沙发"},
    {58, "potted plant", "盆栽植物"},
    {59, "bed", "床"},
    {60, "dining table", "餐桌"},
    {61, "toilet", "马桶"},
    {62, "tv", "电视"},
    {63, "laptop", "笔记本电脑"},
    {64, "mouse", "鼠标"},
    {65, "remote", "遥控器"},
    {66, "keyboard", "键盘"},
    {67, "cell phone", "手机"},
    {68, "microwave", "微波炉"},
    {69, "oven", "烤箱"},
    {70, "toaster", "烤面包机"},
    {71, "sink", "水槽"},
    {72, "refrigerator", "冰箱"},
    {73, "book", "书"},
    {74, "clock", "时钟"},
    {75, "vase", "花瓶"},
    {76, "scissors", "剪刀"},
    {77, "teddy bear", "泰迪熊"},
    {78, "hair drier", "吹风机"},
    {79, "toothbrush", "牙刷"}
};

const int num_categories = sizeof(categories) / sizeof(categories[0]);

int main() {
    // 打印整个结构体数组
    for (int i = 0; i < num_categories; ++i) {
        printf("ID: %d, 英文名: %s, 中文名: %s\n", 
               categories[i].id, categories[i].english_name, categories[i].chinese_name);
    }
    return 0;
}

/* 这是一个简单的C语言程序，它定义了一个结构体数组，其中包含一些物体的类别ID、英文名和中文名。然后，程序遍历这个结构体数组，打印出每个类别的信息。*/
```

## OpenCV学习笔记

### 图像合并

## FFMPEG视频处理学习笔记
