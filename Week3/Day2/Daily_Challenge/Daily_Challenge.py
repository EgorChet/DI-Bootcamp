# Daily Challenge : Pagination

class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items or []
        self.pageSize = int(pageSize)
        self.totalPages = max(1, (len(self.items) + self.pageSize - 1) // self.pageSize)
        self.currentPage = 1

    def clampPage(self, page):
        return max(1, min(page, self.totalPages))

    def getVisibleItems(self):
        start = (self.currentPage - 1) * self.pageSize
        end = start + self.pageSize
        print(self.items[start:end])

    def prevPage(self):
        self.currentPage = self.clampPage(self.currentPage - 1)
        return self

    def nextPage(self):
        self.currentPage = self.clampPage(self.currentPage + 1)
        return self

    def firstPage(self):
        self.currentPage = 1
        return self

    def lastPage(self):
        self.currentPage = self.totalPages
        return self

    def goToPage(self, pageNum):
        self.currentPage = self.clampPage(int(pageNum))
        return self

# Example usage
alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)
p.getVisibleItems() 
p.nextPage()
p.getVisibleItems()
p.lastPage()
p.getVisibleItems()

