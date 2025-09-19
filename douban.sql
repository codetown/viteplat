-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        PostgreSQL 16.4, compiled by Visual C++ build 1940, 64-bit
-- 服务器操作系统:                      
-- HeidiSQL 版本:                  12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 正在导出表  public.douban_assets 的数据：-1 rows
/*!40000 ALTER TABLE "douban_assets" DISABLE KEYS */;
INSERT INTO "douban_assets" ("id", "user_id", "category_id", "title", "description", "file_url", "created_at", "updated_at", "download_count", "average_rating", "thumbnail", "deleted_at") VALUES
	(9, 1, 1, '矮人', NULL, 'https://opengameart.org/sites/default/files/fixeddwarf.zip', '2024-12-18 16:00:27.686326', '2024-12-18 16:00:27.686326', 0, 0.00, NULL, NULL),
	(10, 1, 1, '基础人体模型-男性', NULL, 'https://opengameart.org/sites/default/files/human_male.blend', '2024-12-18 16:01:49.570428', '2024-12-18 16:01:49.570428', 0, 0.00, NULL, NULL),
	(21, 1, 1, 'Fantasy Sword', '一把魔幻风格的剑模型', 'http://example.com/assets/sword.obj', '2024-12-17 10:27:33', '2024-12-17 10:27:33', 0, 0.00, NULL, NULL),
	(22, 2, 2, 'Forest Texture', '一个森林场景的贴图', 'http://example.com/assets/forest_texture.jpg', '2024-12-17 10:27:33', '2024-12-17 10:27:33', 0, 0.00, NULL, NULL),
	(23, 3, 3, 'Explosion Sound', '游戏中的爆炸音效', 'http://example.com/assets/explosion.wav', '2024-12-17 10:27:33', '2024-12-17 10:27:33', 0, 0.00, NULL, NULL),
	(24, 4, 1, 'Dragon Model', '一条巨龙的3D模型', 'http://example.com/assets/dragon.obj', '2024-12-17 10:27:33', '2024-12-17 10:27:33', 0, 0.00, NULL, NULL),
	(25, 5, 4, 'Walk Animation', '人物走路动画', 'http://example.com/assets/walk_animation.fbx', '2024-12-17 10:27:33', '2024-12-17 10:27:33', 0, 0.00, NULL, NULL),
	(26, 6, 5, 'Mountain Background', '高山背景图', 'http://example.com/assets/mountain_background.jpg', '2024-12-17 10:27:33', '2024-12-17 10:27:33', 0, 0.00, NULL, NULL),
	(27, 7, 6, 'Button UI', '游戏按钮UI设计', 'http://example.com/assets/button_ui.png', '2024-12-17 10:27:33', '2024-12-17 10:27:33', 0, 0.00, NULL, NULL),
	(28, 8, 7, 'Character Model', '角色模型', 'http://example.com/assets/character.obj', '2024-12-17 10:27:33', '2024-12-17 10:27:33', 0, 0.00, NULL, NULL),
	(29, 9, 8, 'City Scene', '城市场景资源', 'http://example.com/assets/city_scene.fbx', '2024-12-17 10:27:33', '2024-12-17 10:27:33', 0, 0.00, NULL, NULL),
	(30, 10, 9, 'Magic Wand', '魔法棒道具模型', 'http://example.com/assets/magic_wand.obj', '2024-12-17 10:27:33', '2024-12-17 10:27:33', 0, 0.00, NULL, NULL),
	(1, 1, 1, '基础人体模型', '包括男女', 'https://opengameart.org/sites/default/files/human.zip', '2024-12-18 15:59:20.300114', '2024-12-18 15:59:20.300114', 0, 0.00, 'https://opengameart.org/sites/default/files/styles/medium/public/humans.jpg', NULL);
/*!40000 ALTER TABLE "douban_assets" ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
