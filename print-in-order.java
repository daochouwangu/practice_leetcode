class Foo {
    Queue<Integer> queue1 = new LinkedList<>();
    Queue<Integer> queue2 = new LinkedList<>();
    Queue<Integer> queue3 = new LinkedList<>();
    public Foo() {
        
    }
    public boolean run(int num){
        if(num == 2 && queue1.size() == 0) {
            return true;
        }
        if(num == 3 && queue1.size() == 0 && queue2.size() == 0) {
            return true;
        }
        return false;
    }
    public void first(Runnable printFirst) throws InterruptedException {
        queue1.offer(1);
        // printFirst.run() outputs "first". Do not change or remove this line.
        printFirst.run();
        queue1.poll();
    }

    public void second(Runnable printSecond) throws InterruptedException {
        queue2.offer(2);
        do{
           Thread.sleep(50);
        }while((!run(2)));
        // printSecond.run() outputs "second". Do not change or remove this line.
        printSecond.run();
        queue2.poll();
    }

    public void third(Runnable printThird) throws InterruptedException {
        queue3.offer(3);
        do{
           Thread.sleep(50);
        }while((!run(3)));
        // printThird.run() outputs "third". Do not change or remove this line.
        printThird.run();
        queue3.poll();
    }
}
