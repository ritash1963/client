import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { RepositoryVM } from '../_models/repositoryVM';
import { RepositoriesService } from '../_services/repositories.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repositories: RepositoryVM[];
  name:string = '';
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  
  constructor(private repositoriesService: RepositoriesService) { }

  ngOnInit(): void {
      this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      }
    ]
  }

  getImages(): NgxGalleryImage[] {
    const imageUrls = [];
    for (const photo of this.repositories) {
      imageUrls.push({
        small: photo?.avatarUrl,
        medium: photo?.avatarUrl,
        big: photo?.avatarUrl,
        label: photo?.name
      })
    }
    return imageUrls;
  }

  loadRepositories() {
    if (this.name.length > 0)
    {
       this.repositoriesService.getRepositories(this.name).subscribe(repositories => {
       this.repositories = repositories;
       this.galleryImages = this.getImages(); 
       })
    }
    else{
    this.repositoriesService.getAllRepositories().subscribe(repositories => {
       this.repositories = repositories;
       this.galleryImages = this.getImages(); 
    })
  }
 }
}
