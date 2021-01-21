<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    use HasFactory;
    protected $fillable = ['fname', 'lname', 'note'];
    protected $primaryKey = 'id';
    public $timestamps = false;
    public function role()
    {
        return $this->hasMany(Role::class);
    }
}
