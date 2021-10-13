<?php
// カスタム投稿タイプの設定

add_action('init', 'create_post_type_cat');
function create_post_type_cat() {
  register_post_type(
    'cat',
    array(
      'labels' => array(
        'name' => __('ネコ'),
        'singular_name' => __('ネコ'),
      ),
      'public' => true,
      'menu_position' =>5,
      'supports' => array(
        'title',
        'editor',
        'thumbnail',
      ),
    )
  );
  register_taxonomy(
    'categorytest',
    'cat',
    array(
      'label' => 'カテゴリー',
      'public' => true,
      'hierarchical' => true,
    )
  );
}
