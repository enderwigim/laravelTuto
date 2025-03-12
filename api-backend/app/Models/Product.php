<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // Campos que pueden ser asignados en masa
    protected $fillable = [
        'title',
        'description',
        'banner_image',
        'cost',
        'user_id'
    ];

    // Relación con el usuario (un producto pertenece a un usuario)
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
